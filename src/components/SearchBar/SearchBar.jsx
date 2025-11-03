import { Button, Form } from "react-bootstrap";
import styles from "./SearchBar.module.scss";
import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

export default function SearchBar() {
  const [options, setOptions] = useState([]);

  const handleInputChange = async (e) => {
    const value = e.target.value;
    const apiKey = process.env.REACT_APP_GEOAPIFY_KEY;

    if (!value) return; // إذا الخانة فارغة ما يدير والو

    try {
      const response = await fetch(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(
          value
        )}&type=city&format=json&apiKey=${apiKey}`
      );
      const data = await response.json();
      console.log(data)

      // استخراج المدن المقترحة
      const cityNames =
        data.features?.map((f) => f.properties.formatted) || [];

      setOptions(cityNames);
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  return (
    <Form>
      <Form.Group className={styles.searchContainer}>
        <Autocomplete
        clearOnBlur={false}
          className={styles.searchInput}
          options={options}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Enter your city..."
              onChange={handleInputChange}
            />
          )}
        />
        <Button size="sm" variant="primary">
          Search
        </Button>
      </Form.Group>
    </Form>
  );
}
