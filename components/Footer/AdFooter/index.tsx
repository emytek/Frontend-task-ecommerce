import { Box, Grid, Link, useMediaQuery, useTheme } from "@mui/material";

const AdFooter = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      bgcolor="#FAFAFA"
      padding={isSmallScreen ? "2rem" : "3rem"}
      display="flex"
      flexDirection={isSmallScreen ? "column" : "row"}
      alignItems={isSmallScreen ? "flex-start" : "center"}
      justifyContent="space-between"
    >
      {/* First Section: Logo */}
      <Box
        marginBottom={isSmallScreen ? 2 : 0}
        paddingLeft={isSmallScreen ? "0" : "4rem"}
      >
        <img src="/logo/Bandage.png" alt="BandageLogo" />
      </Box>

      {/* Second Section: Social Media Links */}
      <Box display="flex" flexDirection="row" alignItems="center">
        <Link
          href="https://www.facebook.com/your-page"
          target="_blank"
          style={{ margin: "0 8px" }}
        >
          <img src="/icons/fb.png" alt="Facebook" />
        </Link>
        <Link
          href="https://twitter.com/your-twitter"
          target="_blank"
          style={{ margin: "0 8px" }}
        >
          <img src="/icons/twit.png" alt="Twitter" />
        </Link>
        <Link
          href="https://www.instagram.com/your-instagram"
          target="_blank"
          style={{ margin: "0 8px" }}
        >
          <img src="/icons/instag.png" alt="Instagram" />
        </Link>
      </Box>
    </Box>
  );
};

export default AdFooter;
