import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

export const useBreakpoint = () => {
  const breakpoints = useBreakpoints(breakpointsTailwind)

  const isMobile = () => {
    return breakpoints.smaller('sm')
  }

  return { isMobile }
}
