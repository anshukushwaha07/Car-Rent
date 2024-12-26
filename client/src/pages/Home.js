import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllCars } from "../redux/actions/carsActions";
import { Link } from "react-router-dom";
import { Button } from "antd";
import moment from "moment";
import { Col, Row, Divider, DatePicker, Checkbox } from "antd";
import Spinner from "../components/Spinner";
const { RangePicker } = DatePicker;
function Home() {
  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const [totalCars, setTotalcars] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, []);

  useEffect(() => {
    setTotalcars(cars);
  }, [cars]);

  // function setFilter(values) {
  //   var selectedFrom = moment(values[0], "MMM DD yyyy HH:mm");
  //   var selectedTo = moment(values[1], "MMM DD yyyy HH:mm");

  //   var temp = [];

  //   for (var car of cars) {
  //     if (car.bookedTimeSlots.length == 0) {
  //       temp.push(car);
  //     } else {
  //       for (var booking of car.bookedTimeSlots) {
  //         if (
  //           selectedFrom.isBetween(booking.from, booking.to) ||
  //           selectedTo.isBetween(booking.from, booking.to) ||
  //           moment(booking.from).isBetween(selectedFrom, selectedTo) ||
  //           moment(booking.to).isBetween(selectedFrom, selectedTo)
  //         ) {
  //         } else {
  //           temp.push(car);
  //         }
  //       }
  //     }
  //   }

  //   setTotalcars(temp);
  // }

  function setFilter(values) {
    var temp = [];
    var selectedFrom = moment(values[0], "MMM DD YYYY HH:mm");
    var selectedTo = moment(values[1], "MMM DD YYYY HH:mm");

    for (var car of cars) {
      if (car.bookedTimeSlots.length == 0) {
        temp.push(car);
      } else {
        for (var booking of car.bookedTimeSlots) {
          if (
            selectedFrom.isBetween(booking.from, booking.to) ||
            selectedTo.isBetween(booking.from, booking.to) ||
            moment(booking.from).isBetween(selectedFrom, selectedTo) ||
            moment(booking.to).isBetween(selectedFrom, selectedTo)
          ) {
          } else {
            temp.push(car);
          }
        }
      }
    }
    setTotalcars(temp);
  }

  // function setFilter(values) {
  //   var temp = [];
  //   var selectedFrom = moment(values[0], "MMM DD YYYY HH:mm");
  //   var selectedTo = moment(values[1], "MMM DD YYYY HH:mm");

  //   for (var car of cars) {
  //     let isBooked = false; // Track if the car has a conflicting booking

  //     for (var booking of car.bookedTimeSlots) {
  //       const bookingFrom = moment(booking.from);
  //       const bookingTo = moment(booking.to);

  //       // Check if the selected range overlaps with any booked time slots
  //       if (
  //         selectedFrom.isBetween(bookingFrom, bookingTo, null, "[]") ||
  //         selectedTo.isBetween(bookingFrom, bookingTo, null, "[]") ||
  //         bookingFrom.isBetween(selectedFrom, selectedTo, null, "[]") ||
  //         bookingTo.isBetween(selectedFrom, selectedTo, null, "[]")
  //       ) {
  //         isBooked = true; // Found a booking that conflicts
  //         break; // No need to check further, we can stop here
  //       }
  //     }

  //     // If no bookings conflict, add the car to the temp array
  //     if (!isBooked) {
  //       temp.push(car);
  //     }
  //   }
  //   setTotalcars(temp);
  // }

  return (
    <DefaultLayout>
      <Row className="mt-3" justify="center">
        <Col lg={20} sm={24} className="d-flex justify-content-left">
          <RangePicker
            showTime={{ format: "HH:mm" }}
            format="MMM DD YYYY HH:mm"
            onChange={setFilter} // Use onChange to get selected values
          />
        </Col>
      </Row>
      {loading == true && <Spinner />}
      <Row justify="center" gutter={16} className="mt-15">
        {totalCars.map((car) => {
          return (
            <Col lg={5} sm={24} xs={24}>
              <div className="car p-2 bs1">
                <img src={car.image} className="carimgg" />
                <div className="car-content d-flex align-items-center justify-content-between">
                  <div className="text-left pl-2">
                    <p>{car.name}</p>
                    <p> Rent Per Hour {car.rentPerHour}/- </p>
                  </div>

                  <div>
                    <button className="btn1 mr-2">
                      <Link to={`/booking/${car._id}`}>Book Now</Link>
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </DefaultLayout>
  );
}

export default Home;
