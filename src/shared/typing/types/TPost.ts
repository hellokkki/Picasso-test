export type TPost = {
    body: string,
    id: number,
    title: string,
    userId: number
}

export type TPostSerialized = {
    number: string,
    title: string,
    description: string
}