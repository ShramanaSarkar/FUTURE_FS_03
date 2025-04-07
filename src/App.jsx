import React, { useState, useMemo } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import ArticleCard from "./components/ArticleCard";
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Divider,
} from "@mui/material";
import Sachin from "./assets/sachin.jpg";
import { getTheme } from "./theme";
import { ThemeProvider, CssBaseline } from "@mui/material";

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [mode, setMode] = useState("light");
  const theme = useMemo(() => getTheme(mode), [mode]);

  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev);
  };

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        toggleSidebar={toggleSidebar}
        sidebarVisible={sidebarVisible}
        toggleTheme={toggleTheme}
        mode={mode}
      />
      {sidebarVisible && <Sidebar />}
      <Box sx={{ ml: sidebarVisible ? "250px" : 0, pt: "64px" }}>
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <SearchBar />

          {/* Placeholder for AI-powered article cards */}
          <Box mt={4}>
            <ArticleCard
              title="AI-Generated Wikipedia 2025"
              summary="An example of an article card styled with modern UX."
            />
          </Box>

          <Box sx={{ px: { xs: 2, md: 8 }, py: 4 }}>
            <Card elevation={3} sx={{ borderRadius: 3, padding: 5 }} id="title">
              {/* Title */}
              <Typography
                variant="h4"
                fontWeight="bold"
                gutterBottom
                sx={{
                  textAlign: "right",
                  marginRight: "45px",
                }}
              >
                Sachin Tendulkar
              </Typography>
              {/* Top Section: Bio and Personal Info side-by-side */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" }, // Stack on small screens, side-by-side on medium+
                  gap: 4, // Spacing between bio and card
                  alignItems: "flex-start",
                  mb: 4, // Bottom margin for separation
                }}
              >
                {/* Bio */}
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body1" paragraph>
                    <strong>Sachin Ramesh Tendulkar</strong> (born 24 April
                    1973) is a former Indian international cricketer who
                    captained the Indian national team. Widely regarded as one
                    of the greatest cricketers in history, he is the highest
                    run-scorer of all time in both ODI and Test cricket.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Tendulkar made his Test debut in 1989 against Pakistan at
                    just 16 years old. Over a 24-year career, he amassed a
                    staggering number of records, including 100 international
                    centuries. He played a key role in India's victory in the
                    2011 ICC Cricket World Cup and was awarded the Bharat Ratna,
                    India’s highest civilian honor.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Tendulkar took up cricket at the age of eleven, made his
                    Test match debut on 15 November 1989 against Pakistan in
                    Karachi at the age of sixteen, and went on to represent
                    Mumbai domestically and India internationally for over 24
                    years. In 2002, halfway through his career, Wisden ranked
                    him the second-greatest Test batsman of all time, behind Don
                    Bradman, and the second-greatest ODI batsman of all time,
                    behind Viv Richards. The same year, Tendulkar was a part of
                    the team that was one of the joint-winners of the 2002 ICC
                    Champions Trophy. Later in his career, Tendulkar was part of
                    the Indian team that won the 2011 Cricket World Cup, his
                    first win in six World Cup appearances for India. He had
                    previously been named "Player of the Tournament" at the 2003
                    World Cup. Tendulkar has received several awards from the
                    government of India: the Arjuna Award (1994), the Khel Ratna
                    Award (1997), the Padma Shri (1998), and the Padma Vibhushan
                    (2008). After Tendulkar played his last match in November
                    2013, the Prime Minister's Office announced the decision to
                    award him the Bharat Ratna, India's highest civilian award.
                    He was the first sportsperson to receive the award and, as
                    of 2024, is the youngest recipient. In 2010, Time included
                    Tendulkar in its annual list of the most influential people
                    in the world. Tendulkar was awarded the Sir Garfield Sobers
                    Trophy for cricketer of the year at the 2010 International
                    Cricket Council (ICC) Awards.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Apart from cricket, he has served as a Member of Parliament
                    and is involved in various philanthropic initiatives.
                  </Typography>
                </Box>

                {/* Personal Info */}
                <Box sx={{ flex: 1, maxWidth: 400 }}>
                  <Card elevation={3} sx={{ borderRadius: 3 }}>
                    <CardMedia
                      component="img"
                      height="340"
                      image={Sachin} // Make sure this is imported or available in /public
                      alt="Sachin Tendulkar"
                    />
                    <CardContent>
                      <Typography variant="h6" align="center" gutterBottom>
                        Personal Information
                      </Typography>
                      <Divider sx={{ mb: 1 }} />
                      <Typography variant="body2">
                        <strong>Full name:</strong> Sachin Ramesh Tendulkar
                      </Typography>
                      <Typography variant="body2">
                        <strong>Born:</strong> 24 April 1973 (age 51), Mumbai,
                        Maharashtra
                      </Typography>
                      <Typography variant="body2">
                        <strong>Nickname:</strong> Little Master, Master Blaster
                      </Typography>
                      <Typography variant="body2">
                        <strong>Height:</strong> 165 cm
                      </Typography>
                      <Typography variant="body2">
                        <strong>Batting:</strong> Right-handed
                      </Typography>
                      <Typography variant="body2">
                        <strong>Bowling:</strong> Right-arm leg break, off break
                      </Typography>
                      <Typography variant="body2">
                        <strong>Role:</strong> Top-order Batter
                      </Typography>
                      <Typography variant="body2">
                        <strong>Relations:</strong> Ramesh Tendulkar (father)
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Box>
            </Card>
            <Divider sx={{ my: 4 }} />
            <Card elevation={3} sx={{ borderRadius: 3, padding: 5 }} id="career-highlights">
              {/* Career Highlights */}

              <Typography variant="h4" fontWeight="medium" gutterBottom>
                Career Highlights
              </Typography>
              <ul style={{ marginLeft: 16 }}>
                <li>First Test: 15 Nov 1989 vs Pakistan</li>
                <li>100 international centuries</li>
                <li>2011 ICC World Cup Champion</li>
                <li>Wisden Cricketer of the Year</li>
                <li>Bharat Ratna awardee (2014)</li>
              </ul>
            </Card>
            <Divider sx={{ my: 4 }} />
            <Card elevation={3} sx={{ borderRadius: 3, padding: 5 }} id="reception-legacy">
              {/* Reception & Legecy */}

              <Typography variant="h4" fontWeight="medium" gutterBottom>
                Reception & Legecy
              </Typography>
              {/* Bio */}
              <Box sx={{ flex: 1 }}>
                <Typography variant="body1" paragraph>
                  <strong>Sachin Ramesh Tendulkar</strong> is widely considered
                  one of the greatest and most influential cricketers in the
                  sport's history. His remarkable consistency earned him a
                  massive global fan base—even in Australia, where he frequently
                  scored centuries. Among his admirers, a well-known phrase is,
                  "Cricket is my religion and Sachin is my God." According to
                  ESPNcricinfo, Tendulkar is described as "by a distance, the
                  most worshipped cricketer in the world."
                </Typography>
                <Typography variant="body1" paragraph>
                  During India’s 1998 home series against Australia, Matthew
                  Hayden famously remarked, “I have seen God. He bats at No. 4
                  in India in Tests.” Yet, Tendulkar himself humbly stated, “I
                  am not the God of cricket. I make mistakes—God doesn’t.” He
                  also made a cameo as himself in the 2003 Bollywood film
                  Stumped.
                </Typography>
                <Typography variant="body1" paragraph>
                  On February 24, 2010, after Tendulkar set a record by becoming
                  the first male cricketer to score 200* in a One Day
                  International (against South Africa), ESPNcricinfo’s servers
                  were overwhelmed by traffic, with over five million visitors
                  hitting the site simultaneously.
                </Typography>
                <Typography variant="body1" paragraph>
                  His immense popularity has led to extreme fan reactions—some
                  even tragic. Indian newspapers reported that a young man took
                  his own life after being distraught over Tendulkar not
                  reaching his 100th century. In Mumbai, his stardom has forced
                  him into a different way of living. Ian Chappell once
                  commented that he wouldn’t be able to manage the kind of
                  lifestyle Tendulkar had to endure, such as wearing disguises
                  and only going to the movies at night. Tendulkar himself
                  shared in an interview with Tim Sheridan that he sometimes
                  took late-night drives through the quiet streets of Mumbai to
                  find some peace.
                </Typography>
              </Box>
            </Card>
            <Divider sx={{ my: 4 }} />
            {/* Categories */}
            <Typography variant="h4" fontWeight="medium" gutterBottom id="categories">
              Categories
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
              {[
                "Indian Cricketers",
                "Test Centurions",
                "Bharat Ratna Recipients",
                "Sportspeople from Mumbai",
                "Members of Parliament (Rajya Sabha)",
                "Padma Shri award recipients",
              ].map((category) => (
                <Chip
                  key={category}
                  label={category}
                  color="primary"
                  variant="outlined"
                />
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
