import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { allCountries } from "../allCountries";
import College1 from "../assets/college1.jpg";
import College2 from "../assets/college2.jpg";
import College3 from "../assets/college3.jpg";
import College4 from "../assets/college4.jpg";
import College5 from "../assets/college5.jpg";
import College6 from "../assets/college6.jpg";

let imageLists = [College1, College2, College3, College4, College5, College6];

import Fuse from "fuse.js";

const UniversityFinder = () => {
  const [university, setUniversity] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [resultantUniversities, setResultantUniversities] = useState([]);
  const [result, setResult] = useState(null);
  const [fuseResult, setFuseResult] = useState([]);
  const [selectedUnitersity, setSelectedUnitersity] = useState(null);

  const fuse = new Fuse(resultantUniversities, {
    keys: ["name"],
    threshold: 0.5, // Adjust threshold as needed
    tokenize: true,
    matchAllTokens: true,
    minMatchCharLength: 3, // Adjust minMatchCharLength as needed
  });

  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
    handleFindUniversity(e.target.value);
  };

  const handleFindUniversity = (countryName) => {
    fetch(`http://universities.hipolabs.com/search?country=${countryName}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("An error occured!!!");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setResultantUniversities(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFindUniversityName = (e) => {
    e.preventDefault();
    setSelectedUnitersity(null);
    setUniversity(e.target.value);
    let res = fuse.search(e.target.value);
    setFuseResult(res);
    console.log("RES-", res);
  };

  const getRandomIntegerBetweenZeroAndTwo = () => {
    return Math.floor(Math.random() * 6); // Generates random integer between 0 and 2
  };

  useEffect(() => {
    console.log("fuseResult", fuseResult.length);
  }, [fuseResult]);

  

  return (
    <>
    <div className="flex justify-center mt-20">
        <h2 className="text-3xl font-extrabold text-[#333]">Find your university</h2>
    </div>
      <div className="container px-20 flex justify-center mt-10 gap-8">
        <FormControl sx={{ m: 1, minWidth: 250 }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Select Country
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={selectedCountry}
            onChange={handleChange}
            autoWidth
            label="Select Country"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {allCountries.map((country, idx) => (
              <MenuItem value={country} key={idx}>
                {country}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            label="Enter your university..."
            variant="standard"
            value={university}
            onChange={handleFindUniversityName}
          />
        </Box>
      </div>

      <div className="flex flex-col gap-6 lg:px-80 justify-center m-auto mt-3">
        {fuseResult.length > 0 ? (
          <>
            {fuseResult.length > 6 ? (
              <>
                {fuseResult.slice(0, 6).map((item) => (
                  <>
                    <Alert
                      severity="success"
                      className="cursor-pointer"
                      onClick={() => {
                        setUniversity(item.item.name);
                        setSelectedUnitersity(item);
                        setFuseResult([]);
                      }}
                    >
                      {item.item.name}
                    </Alert>
                  </>
                ))}
              </>
            ) : (
              <>
                {fuseResult.map((item) => (
                  <>
                    <Alert
                      severity="success"
                      className="cursor-pointer"
                      onClick={() => {
                        setUniversity(item.item.name);
                        setSelectedUnitersity(item);
                        setFuseResult([]);
                      }}
                    >
                      {item.item.name}
                    </Alert>
                  </>
                ))}
              </>
            )}
          </>
        ) : (
          <></>
        )}
      </div>

      <div className="flex justify-center lg:px-80 m-auto mt-10">
        {selectedUnitersity !== null ? (
          <>
            <Card sx={{ maxWidth: 345, boxShadow: 7 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={imageLists[getRandomIntegerBetweenZeroAndTwo()]}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {selectedUnitersity.item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                    <a href={selectedUnitersity.item.web_pages[0]} target="_blank">Visit Site</a>
                  
                </Button>
              </CardActions>
            </Card>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default UniversityFinder;
