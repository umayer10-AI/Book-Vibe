const getAllReadlistLocalDB = () => {
    const allReadList = localStorage.getItem("readList")

    if(allReadList) return JSON.parse(allReadList)
    return []
}
const AddReadlistLocalDB = (book) => {
    const allBook = getAllReadlistLocalDB()
    const exist = allBook.find(v => v.bookId === book.bookId)

    if(!exist){
        allBook.push(book)
        localStorage.setItem("readList", JSON.stringify(allBook))
    }
}
const getAllWishlistLocalDB = () => {
    const allReadList = localStorage.getItem("wishList")

    if(allReadList) return JSON.parse(allReadList)
    return []
}
const AddWishlistLocalDB = (book) => {
    const allBook = getAllWishlistLocalDB()
    const exist = allBook.find(v => v.bookId === book.bookId)

    if(!exist){
        allBook.push(book)
        localStorage.setItem("wishList", JSON.stringify(allBook))
    }
}

export {getAllReadlistLocalDB, AddReadlistLocalDB, getAllWishlistLocalDB, AddWishlistLocalDB}