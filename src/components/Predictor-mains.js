import React from "react";
import "./styles/predictor.css";

const PredictorMains = () => {
  return (
    <section>
      <div class="container-fluid" id="main_disp">
        <div class="row">
          <div class="col col-12 col-sm-12 col-md-4  col-lg-4">
            <img src="/images/predictor/cisco2.jpg" class="img-fluid" />
          </div>
          <div class="col col-12 col-sm-12 col-md-4  col-lg-4">
            <h1 class="section_header"> College Predictor</h1>

            <form class="forms" action="/predictor-mains" method="POST">
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="form-group">
                  <input
                    type="number"
                    class="input-md input-rounded form-control"
                    name="rank"
                    id="rank"
                    min="1"
                    max="1500000"
                    placeholder="JEE(Mains) Category Rank"
                    required
                  />
                </div>
              </div>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <h3 style={{ fontFamily: "times new roman" }}>Category</h3>
                <div class="form-group">
                  <select
                    name="category"
                    style={{ fontWeight: "700" }}
                    class="input-md input-rounded form-control"
                    required
                  >
                    <option value="OPEN">OPEN</option>
                    <option value="OBC-NCL">OBC-NCL</option>
                    <option value="SC">SC</option>
                    <option value="ST">ST</option>
                    <option value="GEN-EWS">GEN-EWS</option>
                  </select>
                </div>
              </div>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <h3 style={{ fontFamily: "times new roman" }}>Seat Pool</h3>
                <div class="form-group form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="seatPool"
                    id="radio1"
                    value="Gender-Neutral"
                    checked
                  />
                  <label class="form-check-label" for="radio1">
                    Gender-Neutral
                  </label>
                </div>
                <div class="form-group form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="seatPool"
                    id="inlineRadio2"
                    value="Female-Only"
                  />
                  <label class="form-check-label" for="inlineRadio2">
                    Female-Only
                  </label>
                </div>
              </div>
              <div class="predictor">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
          <div class="col col-12 col-sm-12 col-md-4  col-lg-4">
            <img src="/images/predictor/mains.png" class=" img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PredictorMains;
