import { useEffect, useState } from "react";
import axios from "axios";
import ApexChart from "react-apexcharts";
import TextField from "@mui/material/TextField";

const candle = () => {
  const [post, setPost] = useState();
  const [start, setStart] = useState();
  const [timePeriod, setTimePeriod] = useState("2HRS");

  const coin = "MKR/USDT";
  const URL = "https://rest.coinapi.io/v1/exchangerate/" + coin + "/history";

  useEffect(() => {
    axios
      .get(URL, {
        headers: { "X-CoinAPI-Key": "D536D7C3-B9FD-479F-9795-56FA461C78ED" },
        params: { period_id: "4HRS", time_start: "2023-01-01T12:06:48" },
      })
      .then((response) => {
        const dataSeries = response.data.map((tick) => ({
          x: tick.time_open,
          y: [tick.rate_open, tick.rate_high, tick.rate_low, tick.rate_close],
        }));
        setPost(dataSeries);
      });
  }, []);

  console.log(start);

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        {post ? (
          <ApexChart
            series={[{ data: post }]}
            height={500}
            width={1000}
            type="candlestick"
            options={{
              chart: {
                height: 350,
                type: "candlestick",
              },
              title: {
                text: coin + " " + timePeriod,
                align: "left",
              },
              annotations: {
                xaxis: [
                  {
                    borderColor: "#00E396",
                    label: {
                      borderColor: "#00E396",
                      style: {
                        fontSize: "12px",
                        color: "#fff",
                        background: "#00E396",
                      },
                      orientation: "horizontal",
                      offsetY: 7,
                      text: "Annotation Test",
                    },
                  },
                ],
              },
              tooltip: {
                enabled: true,
              },
              xaxis: {
                type: "datetime",
                labels: {
                  format: "dd-MM hh:mm",
                },
              },
              yaxis: {
                tooltip: {
                  enabled: true,
                },
                labels: {
                  formatter: function (value) {
                    return value.toFixed(2);
                  },
                },
                
              },
            }}
          />
        ) : null}
      </div>
      <div>
        <TextField
          variant="outlined"
          label="Start Date time"
          value={start}
          onChange={(e) => setStart(e.target.value)}
        />
        <TextField variant="outlined" label="Time period" />
      </div>
    </div>
  );
};

export default candle;
