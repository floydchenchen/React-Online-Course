// Step 1: call action creator - need to make sure this action creator is wired up to redux
export function selectBook(book) {
    // Step 2: action creator returns an action - an object with a type property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}