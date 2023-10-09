export default class appError extends Error {
    constructor(public message: string, public status: number = 400) {
        super(message)
    }
}