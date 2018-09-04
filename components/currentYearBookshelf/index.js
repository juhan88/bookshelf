class currentYearBookshelfController {
  constructor($http) {
    this.$http = $http
    this.generatedBookList = []
  }

  getBookList() {
    var bookList = this.$http.get('https://www.googleapis.com/books/v1/users/107333873415083527651/bookshelves/1001/volumes?key=AIzaSyCCvGltyBViRPa8KTby_OXhxP0sVy6AKWA&maxResults=40')
    bookList.then((res) => {
        this.generateBookList(res.data.items)
      })
      .catch((error) => {
        console.log(error, 'error')
        console.log('There was an error!' + error)
      })
  }

  generateBookList(bookList) {
    for (var book in bookList) {
      if (bookList.hasOwnProperty(book)) {
        var book = {
          title: bookList[book].volumeInfo.title,
          author: bookList[book].volumeInfo.authors[0],
          description: bookList[book].volumeInfo.description,
          cover: bookList[book].volumeInfo.imageLinks.thumbnail.replace('zoom=1', "zoom=0")
        }
        this.generatedBookList.push(book)
      }
    }
  }

  $onInit() {
    this.getBookList()
  }

}
angular.module('lesleys-books')
  .component('currentYearBookshelf', {
    restrict: 'E',
    templateUrl: 'bookshelf/components/currentYearBookshelf/index.html',
    controller: currentYearBookshelfController,
    controllerAs: '$ctrl'
  });
