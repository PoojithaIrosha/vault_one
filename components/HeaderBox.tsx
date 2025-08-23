const HeaderBox = ({
  type = "title",
  title,
  subText,
  user,
}: HeaderBoxProps) => {
  return (
    <header className="header-box">
      <h1 className="header-box-title">
        {title}
        {type === "greeting" && (
          <span className="text-bankGradient">&nbsp;{user}</span>
        )}
      </h1>
      <p className="header-box-subtext">{subText}</p>
    </header>
  );
};

export default HeaderBox;
