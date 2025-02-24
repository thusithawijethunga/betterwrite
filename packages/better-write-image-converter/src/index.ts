import {
  ImageToForcePNGOptions,
  ImageFileRawOptions,
  ImageFileRawReturn,
} from 'better-write-types'

export const isImageExtension = (text: string) => {
  return (
    text.endsWith('.png') ||
    text.endsWith('.jpg') ||
    text.endsWith('.jpeg') ||
    text.endsWith('.svg') ||
    text.endsWith('.gif')
  )
}

export const ImageToForcePNG = (
  options: ImageToForcePNGOptions
): Promise<string> => {
  return new Promise((res, rej) => {
    if (!options.raw.startsWith('<svg') && !options.raw.endsWith('svg>')) {
      res(options.raw)

      return
    }

    // convert svg to png
    const blob = new Blob([options.raw], {
      type: 'image/svg+xml;charset=utf-8',
    })

    const URL = window.URL || window.webkitURL || window

    const blobURL = URL.createObjectURL(blob)

    const image = new Image()
    image.setAttribute('crossOrigin', 'anonymous')
    image.onload = () => {
      const canvas = document.createElement('canvas')

      canvas.width = options.width
      canvas.height = options.height

      const context = canvas.getContext('2d') as CanvasRenderingContext2D

      context.drawImage(image, 0, 0, options.width, options.height)

      const url = canvas.toDataURL('image/png')

      res(url)
    }
    image.onerror = () => {
      rej()
    }

    // TODO: other blob performatic method
    image.src = blobURL
  })
}

export const getImageFileRaw = (
  options?: ImageFileRawOptions
): Promise<ImageFileRawReturn> => {
  return new Promise((res, rej) => {
    const _ = document.createElement('input')
    _.type = 'file'
    _.accept = options?.accept || '.png, .svg, .jpg, .jpeg'
    _.addEventListener('change', function () {
      const file = (this.files as any)[0]

      if (!file) return

      const reader = new FileReader()

      const isSvg = file.name.endsWith('.svg')

      if (isSvg) {
        reader.readAsText(file)
      } else {
        reader.readAsDataURL(file)
      }

      reader.onload = async () => {
        if (!isImageExtension(file.name) || !reader.result) {
          rej()
          return
        }

        const raw = isSvg
          ? await ImageToForcePNG({
              raw: reader.result as string,
              width: 2000 as number,
              height: 2000 as number,
            })
          : (reader.result as string)

        res({
          raw,
          fileName: file.name,
          fileSize: file.size,
        })
      }
      reader.onerror = function () {
        rej()
      }
    })
    _.click()
  })
}
