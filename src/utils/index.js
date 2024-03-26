import toast from "react-hot-toast";

export const getReadBooks = () => {
  let readBooks = [];
  const storedReadBooks = localStorage.getItem("readBooks");
  if (storedReadBooks) {
    readBooks = JSON.parse(storedReadBooks);
  }
  return readBooks;
};
export const getWishlistBooks = () => {
  let wishlistBooks = [];
  const storedWishlistBooks = localStorage.getItem("wishlistBooks");
  if (storedWishlistBooks) {
    wishlistBooks = JSON.parse(storedWishlistBooks);
  }
  return wishlistBooks;
};

export const saveReadBook = (ReadBook) => {
  let readBooks = getReadBooks();
  const isExist = readBooks.find((b) => b.bookId === ReadBook.bookId);
  if (isExist) {
    return toast.error("Already Read this Book ");
  } else {
    readBooks.push(ReadBook);
    localStorage.setItem("readBooks", JSON.stringify(readBooks));
    toast.success("Successfully added to Read");
  }
};
export const saveWishlistBook = (wishlistBook) => {
  let wishlistBooks = getWishlistBooks();
  const isExist = wishlistBooks.find((b) => b.bookId === wishlistBook.bookId);
  if (isExist) {
    return toast.error("Already added to Wishlist");
  } else {
    wishlistBooks.push(wishlistBook);
    localStorage.setItem("wishlistBooks", JSON.stringify(wishlistBooks));
    toast.success("Successfully added to Wishlist");
  }
};
