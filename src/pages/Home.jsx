/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import { CoinContext } from "../context/CoinContext";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [search, setSearch] = useState("");
  const [noResults, setNoResults] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; 

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const filteredCoins = allCoin.filter((coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );
    setDisplayCoin(filteredCoins);
    setNoResults(filteredCoins.length === 0);
  };

  // Calculate total pages for pagination
  const totalPages = Math.ceil(displayCoin.length / itemsPerPage);

  // Function to handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div className="home">
      <div className="hero">
        <h1>
          Largest <br /> crypto marketplace
        </h1>
        <p>
          Welcome to the world's Largest cryptocurrency marketplace. Sign up to
          explore more about crypto
        </p>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search Crypto"
            value={search}
            onChange={handleSearchChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="crypto-table">
        {noResults ? (
          <div className="no-results">No results found for your search.</div>
        ) : (
          <>
            <div className="table-layout ">
              <p>#</p>
              <p>Coins</p>
              <p>Price</p>
              <p style={{ textAlign: "center" }}>24H Change</p>
              <p className="market">Market Cap</p>
            </div>
            {displayCoin.slice(startIndex, endIndex).map((item, index) => (
              <Link to={`/coin/${item.id}`} className="table-layout" key={index}>
                <p>{item.market_cap_rank}</p>
                <div className="coin-details">
                  <img src={item.image} alt={item.name} />
                  <p>{`${item.name} - ${item.symbol.toUpperCase()}`}</p>
                </div>
                <p>{`${currency.symbol}${item.current_price.toLocaleString()}`}</p>
                <p
                  style={{
                    textAlign: "center",
                    color: item.price_change_percentage_24h > 0 ? "green" : "red",
                  }}
                >
                  {item.price_change_percentage_24h.toFixed(2)}%
                </p>
                <p className="market">{`${currency.symbol}${item.market_cap.toLocaleString()}`}</p>
              </Link>
            ))}
          </>
        )}
      </div>
      <div className="pagination">
        <Stack spacing={2}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            backgroundColor = "primary"
            variant="outlined" 
            shape="rounded" 
          />
        </Stack>
      </div>
    </div>
  );
};

export default Home;
