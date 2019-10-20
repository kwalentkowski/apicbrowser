interface IPixabayResponseData {
    totalHits: number,
    hits: Array<{
        webformatURL: string
    }>
}

export const extractPixabayImages = (data: IPixabayResponseData): string[] => {
    if (!data || !data.totalHits || !data.hits.length) {
        return []
    }
    return data.hits.map(_ => _.webformatURL)
}