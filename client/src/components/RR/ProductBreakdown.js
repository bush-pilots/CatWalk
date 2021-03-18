/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Slider } from '@material-ui/core';

// ({ reviews, reviewsMeta, isFetching }) => {
class ProductBreakdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      characteristics: {},
      Size: false,
      Width: false,
      Comfort: false,
      Quality: false,
      Length: false,
      Fit: false
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.reviewsMeta !== this.props.reviewsMeta) {
      //move through characterstics, if a specific property is not undefined, then set the bool to true, if it is undefined then
      let newCharacteristics = {};
      let newState = {
        Size: this.state.Size,
        Width: this.state.Width,
        Comfort: this.state.Comfort,
        Quality: this.state.Quality,
        Length: this.state.Length,
        Fit: this.state.Fit
      };
      let characteristics = this.props.reviewsMeta.characteristics;
      //only do this next step if the characteristics key exists
      if (characteristics) {
        for (var key in newState) {
          //consider characterstics
          //undefined case, set key = false in newState
          if (characteristics[key] === undefined) {
            newState[key] = false;
          } else {
            //the key exists check the values for null
            if (characteristics[key].value !== null) {
              newState[key] = true;
              newCharacteristics[key] = characteristics[key];
            } else {
              newState[key] = false;
            }
          }
        }
        newState.characteristics = newCharacteristics;
        this.setState(newState)
      }
    }
  }

  // const [meta, setMeta] = useState({});
  // useEffect(() => {
  //   //after each render and after a did update

  // }, [meta])
  // console.log(`Fetching? ${isFetching}`)
  // console.log('meta', reviewsMeta)
  // meta data:
  // characteristics:
  // Comfort: {id: 61908, value: "2.2941176470588235"}
  // Quality: {id: 61909, value: "2.7647058823529412"}
  // Size: {id: 61906, value: "2.9411764705882353"}
  // Width: {id: 61907, value: "2.9411764705882353"}
  // __proto__: Object
  // product_id: "18445"
  // ratings:
  // 1: "7"
  // 2: "2"
  // 3: "3"
  // 4: "2"
  // 5: "3"
  // __proto__: Object
  // recommended: {false: "7", true: "10"}
  render() {
    return (
      <>
        {this.state.Size ? (
          <div className="breakdown">
            <div className="characteristics">Size</div>
            <Slider
              value={Number(this.state.characteristics.Size.value)}
              min={1}
              step={1}
              max={5}
              track={false}
            />
            <div className="small chMeaning">
              <span className="meaning l">Too small</span>
              <span className="meaning">Perfect</span>
              <span className="meaning r">Too large</span>
            </div>
          </div>
        ) : (
            <div></div>
          )}

        {this.state.Width ? (
          <div className="breakdown">
            <div className="characteristics">Width</div>
            <Slider
              value={Number(this.state.characteristics.Width.value)}
              min={1}
              step={1}
              max={5}
              track={false}
            />
            <div className="small chMeaning">
              <span className="meaning l">Too narrow</span>
              <span className="meaning">Perfect</span>
              <span className="meaning r">Too wide</span>
            </div>
          </div>
        ) : (
            <div></div>
          )}

        {this.state.Comfort ? (
          <div className="breakdown">
            <div className="characteristics">Comfort</div>
            <Slider
              value={Number(this.state.characteristics.Comfort.value)}
              min={1}
              step={1}
              max={5}
              track={false}
            />
            <div className="small chMeaning">
              <span className="meaning l">Uncomfortable</span>
              <span className="meaning">Ok</span>
              <span className="meaning r">Comfortable</span>
            </div>
          </div>
        ) : (
            <div></div>
          )}

        {this.state.Quality ? (
          <div className="breakdown">
            <div className="characteristics">Quality</div>
            <Slider
              value={Number(this.state.characteristics.Quality.value)}
              min={1}
              step={1}
              max={5}
              track={false}
            />
            <div className="small chMeaning">
              <span className="meaning l">Poor</span>
              <span className="meaning">What I expected</span>
              <span className="meaning r">Perfect</span>
            </div>
          </div>
        ) : (
            <div></div>
          )}

        {this.state.Length ? (
          <div className="breakdown">
            <div className="characteristics">Length</div>
            <Slider
              value={Number(this.state.characteristics.Length.value)}
              min={1}
              step={1}
              max={5}
              track={false}
            />
            <div className="small chMeaning">
              <span className="meaning l">Runs short</span>
              <span className="meaning">Perfect</span>
              <span className="meaning r">Runs long</span>
            </div>
          </div>
        ) : (
            <div></div>
          )}

        {this.state.Fit ? (
          <div className="breakdown">
            <div className="characteristics">Fit</div>
            <Slider
              value={Number(this.state.characteristics.Fit.value)}
              min={1}
              step={1}
              max={5}
              track={false}
            />
            <div className="small chMeaning">
              <span className="meaning l">Runs tight</span>
              <span className="meaning">Perfect</span>
              <span className="meaning r">Runs long</span>
            </div>
          </div>
        ) : (
            <div></div>
          )}
      </>
    )

  }


}
export default ProductBreakdown;

