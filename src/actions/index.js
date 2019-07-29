export function selectBook(book) {
    //selectBook is an action creator and need to return an object
    //tith a type property
   return {
       type: 'BOOK_SELECTED',
       payload: book
   }
}