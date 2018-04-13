# Section 2: AJAX Requests with React

## Youtube Search Response

```JavaScript
YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
            this.setState({ videos: videos });
            // if key and value have the same variable name (videos in this case)
            // the above sentence could be written as 'this.setState({ videos });'
});
```

## props

index.js

```JavaScript
render() {
    return (
        <div>
            <SearchBar />
            {/*passing props from videos to VideoList*/}
            <VideoList videos = { this.state.videos } />
        </div>
    );
}
```

video_list.js

```JavaScript
const VideoList = (props) => {
    return (
        <ul className="col-md-4 list-group">
            array.
        </ul>
    );
};
```

## higher-order function: map

e.g.

```JavaScript
var array = [1,2,3];
array.map((number) => { return number * 2 });
```

video_list.js

```JavaScript
const VideoList = (props) => {

    const videoItems = props.videos.map((video) => {
        return <VideoListItem video = { video }/>
    });

    return (
        <ul className="col-md-4 list-group">
            { videoItems }
        </ul>
    );
};
```

## List Item Keys
* use a key, or an ID for each list item

video_list_item.js

```JavaScript
const VideoListItem = ({ video }) => {

    // const video = props.video;

    const imageURL = video.snippet.thumbnails.default.url;

    return (
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageURL}/>
                </div>

                <div className="media-body">
                    <div className="media-heading">{ video.snippet.title }</div>
                </div>
            </div>

        </li>
    )
};
```

## Handling Null Props
* some parent objects just cannot fetch information fast enough to satisfy the needs of a child objecet

video_details.js

```JavaScript
const VideoDetail = ({ video }) => {

    // handling null props
    if (!video) {
        return <div>Loading...</div>;
    }
    
    ...
}
```

## Video Selection
* callback: app -> video_list -> video_list_item


