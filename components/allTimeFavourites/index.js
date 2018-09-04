class allTimeFavouritesController {
    constructor($scope, $http) {
      this.$http = $http
      this.generatedBookList = []
    }
  
    getBookList() {
      var bookList = this.$http.get('https://www.googleapis.com/books/v1/users/107333873415083527651/bookshelves/1002/volumes?key=AIzaSyCCvGltyBViRPa8KTby_OXhxP0sVy6AKWA&maxResults=40')
      bookList.then((res) => {
          this.generateBookList(res.data.items)
        })
        .catch((error) => {
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
    .component('allTimeFavourites', {
      restrict: 'E',
      templateUrl: 'components/allTimeFavourites/index.html',
      controller: allTimeFavouritesController,
      controllerAs: '$ctrl'
    });
  