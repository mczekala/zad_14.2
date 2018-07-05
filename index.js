var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        image: 'hp.jpg'
    },
    {
        id: 2,
        title: 'Krol Lew',
        desc: 'Film o krolu sawanny',
        image: 'kl.jpg'
    },
        {
        id: 3,
        title: 'Matrix',
        desc: 'film o apokalipsie',
        image: 'mx.jpg'
    },
    {
        id: 4,
        title: 'Wlatca pierscieni',
        desc: 'film o ratowaniu swiata',
        image: 'lotr.jpg'
    }
]
var moviesElements = movies.map(function(movie) {
    return React.createElement('li',{key: movie.id},
        React.createElement('h2',{}, movie.title),
        React.createElement('p',{},movie.desc),
        React.createElement('img',{src: movie.image})
    )
})
var element = 
    React.createElement('div',{},
        React.createElement('h1',{},'Lista filmow'),
        React.createElement('ul',{},moviesElements)
    );
ReactDOM.render(element, document.getElementById('app'));