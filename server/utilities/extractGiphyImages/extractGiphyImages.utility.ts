interface IGiphyResponseData {
    data: Array<{
        images: {
            downsized: {
                url: string
            }
        }
    }>
    pagination: {
        total_count: number
    }
}


export const extractGiphyImages = (data: IGiphyResponseData) => {
    if (!data || !data.pagination.total_count || !data.data.length) {
        return []
    }
    return data.data.map(_ => _.images.downsized.url)
}