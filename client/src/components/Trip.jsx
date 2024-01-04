export default function Trip({
  title,
  tags,
  url,
  photos,
  description,
  getTrips,
  setUserInput,
}) {
  const photosInfo = photos
    .slice(1)
    .map((photo) => <img className="trip--info_img" src={photo} />);

  const searchTags = (tag) => {
    setUserInput(tag);
    getTrips();
  };

  return (
    <div className="trip">
      <img src={photos[0]} />
      <div className="trip--info">
        <h2 className="trip--info_header">{title}</h2>
        <p className="trip--info_desc">{`${description.slice(0, 99)} ... `}</p>
        <p>
          <a href={`${url}`} target="_blank">
            อ่านต่อ
          </a>
        </p>
        <p className="trip--info_tags">
          หมวด{" "}
          {tags.map((tag) =>
            tag !== tags[tags.length - 1] ? (
              <span className="trip--info_tag" onClick={() => searchTags(tag)}>
                {tag}{" "}
              </span>
            ) : (
              <>
                <span className="trip--info_tag_and">และ </span>
                <span
                  className="trip--info_tag"
                  onClick={() => searchTags(tag)}
                >
                  {tag}
                </span>
              </>
            )
          )}
        </p>
        <div className="trip--info_img-container">{photosInfo}</div>
      </div>
    </div>
  );
}
