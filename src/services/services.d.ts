interface IMarvelIndexCharactersResponse {
  data: {
    count: number
    limit: number
    offset: number
    total: number
    results: {
      id: number
      name: string
      thumbnail: {
        path: string
        extension: string
      }
      events: {
        items: {
          name: string
        }[]
      }
      series: {
        items: {
          name: string
        }[]
      }
    }[]
  }
}

interface IMarvelShowCharacterResponse {
  data: {
    results: {
      id: number
      name: string
      description: string
      thumbnail: {
        path: string
        extension: string
      }
      comics: {
        available: number
        items: {
          resourceURI: string
          name: string
        }[]
      }
      events: {
        available: number
        items: {
          resourceURI: string
          name: string
        }[]
      }
      series: {
        available: number
        items: {
          resourceURI: string
          name: string
        }[]
      }
      stories: {
        available: number
        items: {
          resourceURI: string
          name: string
        }[]
      }
    }[]
  }
}

interface IMarvelIndexCharacterResourceResponse {
  data: {
    results: {
      id: number
      title: string
      description: string
      thumbnail: {
        path: string
        extension: string
      }
    }[]
  }
}
