export default function Trip({ title, tags, url, photos, description }) {
  const photosInfo = photos
    .slice(1)
    .map((photo) => <img className="trip--info_img" src={photo} />);

  return (
    <div className="trip">
      <img src={photos[0]} />
      <div className="trip--info">
        <h2 className="trip--info_header">{title}</h2>
        <p className="trip--info_desc">
          {`${description.slice(0, 99)} ... `}
          <a href={`${url}`} target="_blank">
            อ่านต่อ
          </a>
        </p>
        <p className="trip--info_tags">
          {`หมวด ${tags.map((tag) => `${tag} `)}`}
        </p>
        <div className="trip--info_img-container">{photosInfo}</div>
      </div>
    </div>
  );
}
