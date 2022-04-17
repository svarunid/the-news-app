export default function Article() {
  const imgUrl = "https://cdn.vox-cdn.com/thumbor/OYrvaaOHBuEpdTeRO55nZnZdexs=/0x215:3000x1786/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/8937281/acastro_170726_1777_0007_v2.jpg";
  return (
    <div className="w-96 h-64 drop-shadow rounded border border-gray-400 flex flex-col">
        <img src={imgUrl} alt="something" />
      <p>something</p>
    </div>
  );
}
