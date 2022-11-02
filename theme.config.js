const theme = {
  titleSuffix: " | дроби",
  search: true,
  unstable_flexsearch: true,
  unstable_staticImage: true,
  floatTOC: true,
  font: false,
  github: "https://github.com/wadadaaa/malben-fractions",
  projectLink: "https://github.com/wadadaaa/malben-fractions",
  logo: () => (
    <>
      <img
        src="/malben-logo.jpg"
        height="50"
        width="50"
        style={{ marginRight: "1em" }}
      />
      <h1>
        Дроби <span style={{ opacity: 0.2 }}></span>
      </h1>
    </>
  ),
  head: function Head(props) {
    return (
      <>
        <meta charset="utf-8" />
        <meta name="theme-color" content="#000" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/javascript.svg" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/javascript.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/javascript.svg"
        />
        <link rel="mask-icon" href="/javascript.svg" color="#000000" />
        <link rel="shortcut icon" href="/javascript.svg" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="description"
          content=""
        />
        <meta
          name="description"
          content=""
        />
        <meta name="author" content="wadadaaa" />
        <meta
          property="og:url"
          content=""
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="692" />
        <meta
          property="og:title"
          content={`${props.title} | дроби`}
        />
        <meta
          property="og:description"
          content=""
        />
        <meta
          property="og:image"
          content=""
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@wadadaaaa" />
        <meta name="twitter:creator" content="@wadadaaaa" />
      </>
    );
  },
  darkMode: false,
  footerText: `${new Date().getFullYear()} © malben`,
  nextThemes: {
    defaultTheme: "light",
  },
};
export default theme;
