export default {
  new: {
    title: 'New Project',
    description1: '',
    description2: 'betterwrite.io ',
    description3:
      'offers design styles so you can adapt to your needs as you prefer.',
    blank: {
      title: 'Blank',
      description:
        'The default editor. Recommended for simple projects that do not require specific resources.',
      button: 'Create',
    },
    creative: {
      title: 'Creative',
      description:
        'Divide your project into chapters, notes and drafts. Recommended for writing books.',
      button: 'Create',
    },
  },
  material: {
    fileController: {
      import: 'Import',
      export: 'Export',
    },
  },
  blocked: {
    title: 'Better Write.',
    introduction: {
      name: 'Introduction',
      description1: '',
    },
    commands: {
      description1:
        'Commands are flexible items that the user can use to customize their project, ranging from typeable items (text, title, lists, checkboxes) to pinned items (image, drawing, line/page break).',
      description2: `Right Click or Press a flexible item to open the item's options menu.`,
      description3:
        'Check out the available commands and their shortcut keys below.',
      menu: {
        delete: 'Delete - Deletes the selected item.',
        up: `Top - Swap the current item's position with the top item.`,
        down: `Down - Swap the current item's position with the lower item.`,
        comments: `Comment - Available in text only, write down quick information for future reference.`,
        swap: 'Swap - Replaces the current item with another.',
        add: 'Add - Insert a new item at a position below the current item.',
        text: 'Text - Available in text only, customize text with new styles to overwrite on file generation.',
        image:
          'Image - Available on images only, change the default image settings.',
      },
      name: 'Comandos',
    },
  },
  header: {
    project: 'Project',
    export: 'Export',
    chapters: 'Chapters',
    tools: 'Tools',
    help: 'Help',
    live: 'Live',
  },
  auth: {
    login: {
      show: 'Enter',
      title: 'Better Write',
      error: 'An unexpected error occurred while authenticating the account :(',
      placeholder: 'Enter your email here.',
      success: 'Successfully logged in!',
      google: 'Login with Google Account',
      github: 'Login with Github Account',
    },
  },
  project: {
    control: {
      title: 'Chapter {suffix}',
    },
    configuration: {
      title: 'Document',
      creator: 'Author',
      name: 'Name',
      subject: 'Subject',
      producer: 'Producer',
      keywords: 'Keywords',
      tooltip: {
        base: 'These fields are used by the application to export documents and generate content when necessary. In short, fill in the fields correctly.',
        creator:
          'Name / Organization responsible for creating / writing the document',
        name: 'The name of the document',
        subject: 'The subject of the document',
        producer: 'Producer / Publisher of the document',
        keywords: 'Palavras-Chave do Documento',
      },
    },
  },
  preferences: {
    header: {
      title: 'Preferences',
      close:
        'Some changes will only take effect when reloading an application. Do you want to reload an application?',
    },
    project: {
      title: 'Project',
    },
    configuration: {
      title: 'Configuration',
      theme: {
        title: 'Theme',
        define: 'Pre-Defined',
        or: 'OR',
      },
      editor: {
        options: {
          googleFonts: {
            title: 'Google API Fonts',
            description:
              'Enable the use of external fonts in the editor. It depends on the internet connection. Does not affect requests from file generators.',
          },
        },
        background: {
          title: 'Background',
          image: 'Image',
          imageBlur: 'Blur',
          imageGrayscale: 'Grayscale',
          imageSaturate: 'Saturate',
          imageSepia: 'Sepia',
        },
        title: 'Editor',
        heading: 'Heading Text',
        header: 'Top Bar',
        graph: 'Sidebar',
        text: 'Editor Text',
        fontFamily: 'Font Family',
        fontWeight: 'Font Weight',
        fontSize: 'Font Size',
      },
    },
    styles: {
      title: 'Styles',
    },
    keyboard: {
      title: 'Keyboard',
    },
    commands: {
      '1': 'Paragraph',
      '2': 'Heading Two',
      '3': 'Heading Three',
      '4': 'Line Break',
      '5': 'Page Break',
      '6': 'Checkbox',
      '7': 'List',
      '8': 'Image',
      '9': 'Drawing',
    },
    shortcuts: {
      title: 'Hotkeys',
      editor: {
        italic: 'Add Italic',
        bold: 'Add Bold',
        underline: 'Add Underline',
        delete: 'Delete',
        undo: 'Text Undo',
        undoEvent: 'Action Undo',
        swap: 'Change Position',
        to: 'Go To Next Position',
        dragtitle: 'Drag Position',
        dragshort: 'Alt + Mouse Left',
      },
      inserts: {
        title: 'Insert Shortcuts',
        description:
          'Set values ​​to be entered from the current caret position.',
        key: 'Shortcut',
        value: 'Value',
      },
    },
  },
  entity: {
    paragraph: 'Paragraph',
    'heading-one': 'Heading 1',
    'heading-two': 'Heading 2',
    'heading-three': 'Heading 3',
    'page-break': 'Page Break',
    'line-break': 'Line Break',
    image: 'Image',
    generator: {
      template: 'Default',
    },
  },
  bar: {
    supabase: {
      load: 'Cloud Load',
      save: 'Cloud Save',
    },
    pdf: {
      preview: 'Preview (.PDF)',
      generate: 'Generate (.PDF)',
      configuration: 'Configure (.PDF)',
    },
    txt: {
      generate: 'Generate (.TXT)',
    },
    html: {
      generate: 'Generate (.HTML)',
    },
    docx: {
      configuration: 'Configure (.DOCX)',
      generate: 'Generate (.DOCX)',
    },
    project: {
      new: 'New Project',
      blank: 'New Simple Project',
      configuration: 'Configure',
      load: 'Load',
      save: 'Save',
      preferences: 'Preferences',
      statistics: 'Statistics',
      corrector: 'Corrector',
      autosave: 'Auto Save (in minutes)',
      language: 'Language',
      theme: 'Theme',
      import: 'Import',
      export: 'Export',
      exportAs: 'Export as...',
    },
    chapter: {
      drafts: 'Drafts',
      new: 'New',
      delete: 'Delete',
      up: 'Up',
      down: 'Down',
    },
    dropbox: {
      connect: 'Connect',
      save: 'Save',
      load: 'Load',
    },
    drive: {
      save: 'Google Drive Save',
      load: 'Google Drive Load',
    },
    assistants: {
      speechRecognition: 'Voice Typing',
      actions: 'Actions',
      finder: 'Text Search',
      swapper: 'Text Swapper',
    },
    help: {
      doubts: 'Doubts',
      support: 'Suporte',
      terms: 'Terms of Use',
    },
    generator: {
      substitutions: 'Substitutions',
    },
    live: {
      enter: 'Enter',
      create: 'Create Room',
    },
  },
  window: {
    confirmConfiguration: 'Do you want to quit saving the settings?',
    saveDropbox: 'Are you sure to save this file to Dropbox?',
    saveLocal: 'Are you sure to save this file?',
    deleteChapterPage: 'Are you sure to delete the current chapter?',
  },
  text: {
    placeholder: {
      base: `Press or Right-Click to display the options menu.`,
      paragraph: 'Paragraph',
      headingone: 'H1',
      headingtwo: 'H2',
      headingthree: 'H3',
      shortcuts: {
        switcherEntry: 'Entry',
        switcherOutput: 'Output',
        finderEntry: 'Entry',
      },
    },
  },
  pdf: {
    note: {
      title: 'Considerations',
      description: 'Text',
      bw: 'Document produced by',
    },
    externals: {
      generate: {
        title: 'Generate',
        button: 'Create',
      },
      preview: {
        title: 'Simulate',
        button: 'Create',
        warning: `* Simulation mode does not support all Better Write implementation features. If it doesn't render, choose Generate or PDF.`,
      },
    },
    inserts: {
      nowOnline:
        'It was detected that you have an internet connection, but the fonts were not loaded. Please reload the page.',
    },
    theme: {
      title: 'Use Theme',
      tooltip:
        'This feature will use the current design theme and ignore the other pdf options that apply coloring.',
    },
    project: {
      title: 'Document',
      encryption: {
        title: 'Encryption',
        user: 'User Password',
        owner: 'Owner Password',
      },
      permissions: {
        title: 'Permissions',
        printing: 'Print',
        modifying: 'Modify',
        copying: 'Copy',
        annotating: 'Write',
        fillingForms: 'Subscribe / Fill in',
        contentAccessibility: 'Content Accessibility',
        documentAssembly: 'Mounting',
      },
      tooltip: {
        title: `The following options interfere with the user's access to the PDF. Only interfere with the default configuration if you feel it is necessary.`,
        permissions: {
          printing: 'Print',
          modifying: 'Modify',
          copying: 'Copy',
          annotating: 'Write',
          fillingForms: 'Subscribe / Fill in',
          contentAccessibility: 'Content Accessibility',
          documentAssembly: 'Mounting',
        },
      },
    },
    cover: {
      tooltip:
        ' So far, the cover inserted with image has problems with the top margin, defined in Page. We recommend leaving the top margin at 0 if you want to use the cover with image feature.',
      type: 'Enable',
      image: 'Use Image',
    },
    base: {
      backgroundColor: {
        title: 'Background Color',
        tooltip:
          'The Background Color will only be applied if the "Use Theme" option is disabled.',
      },
      tooltip:
        'Page features can change drastically up to v1.x version of BetterWrite.',
      title: 'Page',
      pageSize: 'Size',
      pageOrientation: 'Orientations',
      pageMargins: {
        title: 'Margins',
        left: 'Left',
        top: 'Top',
        right: 'Right',
        bottom: 'Bottom',
      },
      footer: {
        title: 'Footer',
        exists: 'On',
        start: 'Initial',
        alignment: 'Alignment',
        size: 'Size',
        type: 'Style',
        fontFamily: 'Font',
      },
      header: {
        title: 'Footer',
        content: 'Content',
        exists: 'On',
        start: 'Initial',
        alignment: 'Alignment',
        size: 'Size',
        type: 'Style',
        fontFamily: 'Font',
      },
      summary: {
        title: 'Sumário',
        type: 'Estilo',
        fontSize: 'Tamanho',
        fontFamily: 'Fonte',
      },
    },
    lineBreak: {
      spacing: 'Spacing',
      active: 'Use Image',
      size: 'Size',
    },
    custom: {
      image: {
        height: 'Height',
        width: 'Width',
        alignment: 'Alignment',
      },
      title: {
        cover: 'Cover',
        paragraph: 'Paragraph',
        headingOne: 'Heading One',
        headingTwo: 'Heading Two',
        headingThree: 'Heading Three',
      },
      generics: {
        font: 'Font',
        fontSize: 'Font Size',
        lineHeight: 'Line Height',
        indent: 'Indent',
        bold: 'Bold',
        italics: 'Italic',
        alignment: 'Alignment',
        characterSpacing: 'Character-Spacing',
        color: 'Text Color',
        background: 'Text Background',
        markerColor: 'Marker Color',
        decoration: 'Decoration',
        decorationStyle: 'Decoration Style',
        decorationColor: 'Decoration Color',
        breakPage: 'Break Page',
        lineBreak: 'Line Break',
      },
      save: 'Save',
    },
    configuration: {
      header: {
        content: 'Content Here',
      },
      footer: {
        style: {
          simple: 'Simple',
          counter: 'Counter',
        },
      },
      summary: {
        style: {
          default: 'Default',
        },
      },
      alignment: {
        default: 'Default',
        justify: 'Justify',
        left: 'Left',
        center: 'Center',
        right: 'Right',
      },
      orientation: {
        portrait: 'Portrait',
        landscape: 'Landscape',
      },
    },
  },
  aside: {
    resume: 'Resumo',
    dropbox: {
      connect: 'Connect',
      save: 'Save',
      load: 'Load',
    },
    drive: {
      save: 'Google Drive Save',
      load: 'Google Drive Load',
    },
    graph: {
      title: 'Display List',
      chapters: 'Chapters',
      actuallyPage: 'Actually Page',
      projectPages: 'Project Pages',
      timeline: 'Timeline',
      annotations: 'Annotations',
    },
    configuration: {
      title: 'Settings',
      dark: 'Dark Mode',
      lang: 'Language',
      draggable: 'Draggable',
      bars: 'Sidebars',
      transition: 'Transitions',
      autosave: 'Auto-Save',
      blocked: 'Initial Tutorial',
      bottomBar: 'Bottom Bar',
      language: 'Language',
      advanced: 'Advanced',
      entity: {
        title: 'Editor',
        insertEntityInParagraphBreakLine: 'Insert Paragraph at line breaks',
      },
    },
    entity: {
      delete: 'Delete',
      up: 'Up',
      down: 'Down',
      switch: 'Change',
      add: 'Add',
      image: 'Image',
      comments: 'Comments',
      paragraph: 'Paragraph',
      customize: 'Text',
      optionsOn: 'Enable',
    },
    project: {
      title: 'Project',
      addons: {
        textSwitcher: {
          title: 'Replace Text',
        },
        textFinder: {
          title: 'Find Text',
        },
      },
      save: {
        title: 'Simple Save',
      },
      load: {
        title: 'Simple Load',
      },
      blocked: 'Create or load a project.',
      page: {
        new: {
          title: 'New Chapter',
        },
        delete: {
          title: 'Delete Chapter',
        },
      },
      new: {
        title: 'New Project',
        name: 'Name',
        creator: 'Creator',
        version: 'Version',
        subject: 'Subject',
        confirm: 'Create',
        type: 'Style',
        create: 'Create',
        types: {
          blank: {
            title: 'Blank',
            description:
              'Create a project without any additional features. Recommended for simple notes and projects.',
          },
          creative: {
            title: 'Creative',
            description:
              'Create a project with all the structure needed to create books.',
          },
        },
        content: {
          name: 'New Project',
          nameNew: 'Untitled',
          creator: 'Lorem Ipsum',
          subject:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum molestie metus. Etiam in metus arcu. Ut at augue neque. Donec ac felis vel arcu gravida volutpat.',
          version: '0.1.0',
        },
      },
    },
    pdf: {
      title: 'Generate',
      preview: 'Preview',
      configuration: 'Configure',
    },
    commands: {
      title: 'Commands',
      prefix: 'Prefix',
      contents: [
        {
          title: 'Paragraph',
          tag: 'P',
          content:
            'Insert a simple paragraph. By default, all blocks start as a paragraph.',
        },
        {
          title: 'Heading One',
          tag: 'H2',
          content: 'Secondary title.',
        },
        {
          title: 'Heading Two',
          tag: 'H3',
          content: 'Tertiary title.',
        },
        {
          title: 'Heading Three',
          tag: 'BP',
          content:
            'Page Break. Generators have automatically broken the page it is on.',
        },
        {
          title: 'Line Break',
          tag: 'LB',
          content:
            'Line break. The generators automatically wrapped the line where it is inserted.',
        },
        {
          title: 'Image',
          tag: 'IM',
          content: 'Image. Add an image from your device to the editor.',
        },
        {
          title: 'Dialogue',
          tag: 'D',
          content:
            'Dialogue. The editor will insert the defined dialog objective. See Preferences for available options for this feature.',
        },
        {
          title: 'Checkbox',
          tag: 'CH',
          content:
            'Selection box. The generators will automatically render the checkbox option.',
        },
        {
          title: 'List',
          tag: 'LI',
          content:
            'List. The generators will automatically count subsequent lists.',
        },
        {
          title: 'Draw',
          tag: 'T',
          content:
            'Create ideas from your drawings. Generators convert the drawing to an image.',
        },
      ],
    },
  },
  pwa: {
    prompt: {
      offlineReady: 'App ready to work offline',
      newContent: 'New content available, click on reload button to update.',
      reload: 'Reload',
      close: 'Close',
    },
  },
  drafts: {
    active: 'Active',
    others: 'Others',
    chapters: 'Chapters',
    statistics: {
      characters: 'Characters',
      letters: 'Letters',
      paragraph: "Paragraph's",
      heading: "Heading's",
      fixed: 'Fixed Items',
      longest: 'Longest Content',
    },
  },
  addons: {
    substitutions: {
      description:
        'Replace entire words and phrases without having to change them one by one. It is not recommended to edit or remove default items. Substitute initially as words and then enter bold/italic.',
      from: 'Replace',
      to: 'For',
      italic: 'Italic',
      bold: 'Bold',
    },
    corrector: {
      convert: 'Convert',
      removeStartWhitespace: {
        title: 'Remove spaces at the beginning',
        description:
          'All white space at the beginning of the paragraph will be removed.',
      },
      removeEndWhitespace: {
        title: 'Remove spaces at the end',
        description:
          'All white space at the end of the paragraph will be removed.',
      },
      insertParagraphEndStop: {
        title: 'Insert End Point',
        description: 'All paragraphs will have a period added if necessary.',
      },
      removeExtraWhitespace: {
        title: 'Remove Multiple White Space',
        description: 'All unnecessary white space will be removed.',
      },
      insertDialogEndStop: {
        title: 'Insert End Point in Dialog',
        description:
          'All paragraphs will have a period appended at the end of the second occurrence of dialog.',
      },
      resetEntityRaw: {
        title: 'Clear the Items',
        description: 'Remove the internal content of all typed items.',
      },
    },
    statistics: {
      global: 'Global',
      characters: 'Characters',
      impact: 'Estimated Reading Time',
      letters: 'Letters',
      words: 'Words',
      repeated: 'Repeated Words',
      min: 'Minimum Characters',
      paragraph: "Paragraph's",
      heading: "Heading's",
      fixed: 'Fixed Items',
      longest: 'Longest Content',
    },
  },
  annotations: {
    items: {
      file: 'New File',
      folder: 'New Folder',
    },
    theme: {
      placeholder: 'Type / to open commands...',
      tags: {
        h1: 'Primary Title',
        h2: 'Secondary Title',
        h3: 'Tertiary Title',
        bulletList: 'Bullet List',
        orderedList: 'Ordered List',
        taskList: 'Task List',
        image: 'Image',
        quote: 'Quote',
        table: 'Table',
        code: 'Code',
        divider: 'Divider',
      },
    },
  },
  characters: {
    title: 'Characters',
    description: 'Get control of specific words as you write.',
    item: {
      addCharacter: 'Add Character',
      name: 'Name',
      nameCase: 'Type',
      nameCaseStrict: 'Strict',
      nameCaseDefault: 'Default',
      nameCaseAll: 'All',
      color: 'Color',
      colorAlpha: 'Opacity',
      important: 'Important',
    },
    data: {
      occurrences: 'Occurrences',
      averageOccurrences: 'Average of Occurrences',
    },
  },
  tutorial: {
    buttons: {
      prev: 'Previous',
      next: 'Next',
    },
    pages: {
      1: {
        title: 'Creativity.',
        description1:
          'Welcome to the word processor aimed at writing enthusiasts.',
        description2: `Here's an exclusive tour to discover and learn about betterwrite.io many tools!`,
        alert: 'Do not display the tutorial again.',
      },
      2: {
        title: 'Entity Model',
        description1:
          'The main editor is designed to allow individual interaction on any element, where each item entered does not affect other elements in the same editor.',
        description2:
          'The great advantage of this approach is the emergence of unique and fully customizable features.',
        description3:
          'To interact with each item (entity) press or right-click on the item in question or use the keyboard shortcut CTRL + (1-9).',
      },
      3: {
        title: 'Side Graph',
        description1:
          'Visualize in real time everything that happens in the project at all times.',
        high2: 'Chapters:',
        high3: 'Annotations: ',
        description2:
          'Divide your manuscripts into chapters without worrying about changing anything in the future.',
        description3: `Have your notes in one place and without interfering with the project's export flow.`,
      },
      4: {
        title: 'Top Bar',
        description1:
          'Easily access any tool you want without the need for many unnecessary steps.',
        high2: 'File: ',
        high3: 'Export: ',
        high4: 'Tools: ',
        high5: 'Help: ',
        description2:
          'Check out the main ways of manipulating the project, such as creating, saving, changing, loading and querying.',
        description3:
          'File generators and their definitions. Each extension works with different settings from each other.',
        description4:
          'Additional features that only tend to add to your experience.',
        description5: 'Documentation for inquiries.',
      },
      5: {
        title: 'Tooling',
        description1: 'Discover new ways to handle your project.',
        high2: 'Drafts: ',
        high3: 'Corrector: ',
        high4: 'Insert Shortcuts: ',
        high5: 'Characters: ',
        description2:
          'Write multiple versions of your text without any worries.',
        description3: 'Handle specific cases on all items.',
        description4:
          'Create shortcuts to insert recurring words or sentences.',
        description5:
          'Easily discover how much a character appears in the text or its impact on context.',
      },
      final: {
        title: 'Explore.',
        description1:
          'Now enjoy it the way you like and configure it the way you want.',
      },
    },
  },
}
