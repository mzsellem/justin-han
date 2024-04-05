interface Props {
    title: String,
    link: String,
    imageUrl: String, 
}

const MediaCard: React.FC<Props> = () => {
    const playlists = [
    {
        title: 'International Conducting',
        link: 'https://www.youtube.com/watch?v=15FhxsmcZq8&list=PLLPThjvgshhW2WX9AcSqnTw202xwF6LZn',
        imageUrl: 'justinczechconduct.png',
    },
    {
        title: 'Mozart Concert',
        link: 'https://www.youtube.com/watch?v=BdFr9vdz-SU&list=PLLPThjvgshhUAI_VCYpJEXm2DVcrlEzMX',
        imageUrl: 'mozart.png',
    },
    {
        title: 'Christmas Oratorio',
        link: 'https://www.youtube.com/watch?v=RDmY90Xs3NQ&list=PLLPThjvgshhWNfcqG3pAdfbKTWbOG0LXV',
        imageUrl: 'emory-xmas-tree.png',
    },
    {
        title: 'Masters Chamber Recital',
        link: 'https://www.youtube.com/watch?v=END8x_udfQ4&list=PLLPThjvgshhVgXVJPlMGlngG0VeUo099a',
        imageUrl: 'ga-state-music',
    },
    {
        title: "Handel's Messiah",
        link: 'https://www.youtube.com/watch?v=-CaGIboDT4c&list=PLLPThjvgshhWcgWDoEDgaknFNNwgyZULd',
        imageUrl: 'handel.png',
      },
  ];

return (
    <>
        <div className="p-4 mb-4 text-center sm:overflow-x-auto sm:flex">
      {playlists.map((playlist, index) => (
        <div key={index} className="flex-shrink-0 mb-10 ml-4 mr-4 w-52">
          <div className="flex flex-col items-center font-bold text-md font-pro">
            <h1 className="mb-2">{playlist.title}</h1>
            <div className="flex items-center justify-center text-center">
              <a href={playlist.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={playlist.imageUrl}
                  className="border-2 rounded-xl"
                  alt={`Portrait of ${playlist.title}`}
                />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
)
}
export default MediaCard;