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

const removeReadlistLocalDB = (book) => {
    const allBook = getAllReadlistLocalDB()
    const remove = allBook.filter(v => v.bookId !== book.bookId)
    localStorage.setItem("readList", JSON.stringify(remove))
}

const getAllWishlistLocalDB = () => {
    const allWishList = localStorage.getItem("wishList")

    if(allWishList) return JSON.parse(allWishList)
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

const removeWishlistLocalDB = (book) => {
    const allBook = getAllWishlistLocalDB()
    const remove = allBook.filter(v => v.bookId !== book.bookId)
    localStorage.setItem("wishList", JSON.stringify(remove))
}

export {getAllReadlistLocalDB, AddReadlistLocalDB, getAllWishlistLocalDB, AddWishlistLocalDB,removeReadlistLocalDB, removeWishlistLocalDB}