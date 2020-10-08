import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { GlobalContext } from "../Store";
import { GithubPicker } from "react-color";
import { Formik, Form } from "formik";
import { parseAndFormatDate } from "../utils";
import ValidatedField from "./ValidatedField";
import ReminderSchema from "../ReminderSchema";
import { actions, API_URL } from "../constants";

const Modal = ({ onClose }) => {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const {
    state: {
      reminderData: { date },
      currentReminder,
    },
    dispatch,
  } = useContext(GlobalContext);
  const isEdit = !!currentReminder;
  const initialValues = {
    description: "",
    date: parseAndFormatDate(date),
    time: "1:00 PM",
    city: "",
    color: "#e53e3e",
  };
  const [showForecast, setShowForecast] = useState(false);
  const [forecastData, setForecastData] = useState({});

  const fetchForecast = async (cityName) => {
    try {
      const response = await fetch(
        `${API_URL}?q=${cityName
          .replace("", "+")
          .toLowerCase()}&APPID=b312442a73a4c62ba990566c860678d9&units=metric`
      );
      if (!response.ok) {
        setForecastData({
          temp: "N/A",
          image: "http://openweathermap.org/img/wn/03n.png",
        });
        return;
      }

      const data = await response.json();

      setForecastData({
        image: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
        description: data.weather[0].description,
        temp: `${Math.round(data.main.temp)} °C`,
        feelsLike: `${Math.round(data.main.feels_like)} °C`,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <Formik
        initialValues={isEdit ? currentReminder : initialValues}
        validationSchema={ReminderSchema}
        onSubmit={(values) => {
          dispatch({
            type: isEdit ? actions.EDIT_REMINDER : actions.SAVE_REMINDER,
            payload: values,
          });
          onClose();
        }}
      >
        {({ values, setFieldValue, errors, touched }) => (
          <Form>
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-gray-500 opacity-75" />
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" />
              &#8203;
              <div
                className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="w-full bg-white overflow-hidden w-full block p-2">
                      <div className="flex flex-row">
                        <div className="flex-1">
                          <h2 className="font-bold text-2xl mb-6 text-gray-800 border-b pb-2">
                            {isEdit ? "Edit" : "Create"} a Reminder
                          </h2>
                        </div>
                        <div className="inline-flex flex-col items-center">
                          <span className="text-center ml-1 text-xs text-gray-600 font-normal italic">
                            Pick Color
                          </span>
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              setShowColorPicker(true);
                            }}
                            className="rounded-b"
                            style={{
                              backgroundColor: values.color,
                              height: "30px",
                              width: "30px",
                              cursor: "pointer",
                            }}
                          />
                          {showColorPicker && (
                            <GithubPicker
                              color={values.color}
                              onChangeComplete={({ hex }) => {
                                setFieldValue("color", hex);
                                setShowColorPicker(false);
                              }}
                            />
                          )}
                        </div>
                      </div>
                      <div className="mb-4">
                        <label className="text-gray-800 block mb-1 font-bold text-sm tracking-wide">
                          Description{" "}
                          <span className="ml-1 text-xs text-gray-600 font-normal">
                            Max 30 chars
                          </span>
                          <span className="float-right text-gray-400 text-xs">
                            {30 - values.description.length}
                          </span>
                        </label>
                        <ValidatedField
                          type="text"
                          name="description"
                          maxLength={30}
                          placeholder="Enter description here"
                        />
                      </div>
                      <div className="mb-4 flex">
                        <div className="flex-1">
                          <label className="text-gray-800 block mb-1 font-bold text-sm tracking-wide">
                            Date{" "}
                            <span className="ml-1 text-xs text-gray-600 font-normal italic">
                              Month Day, Year
                            </span>
                          </label>
                          {/*TODO: Change type to date*/}
                          <ValidatedField type="text" name="date" />
                        </div>
                        <div className="px-2 flex-1">
                          <label className="text-gray-800 block mb-1 font-bold text-sm tracking-wide">
                            Time
                          </label>
                          <ValidatedField type="text" name="time" />
                        </div>
                      </div>
                      <div className="mb-4 flex">
                        <div className="flex-shrink-0 flex-1">
                          <label className="text-gray-800 block mb-1 font-bold text-sm tracking-wide">
                            City
                          </label>
                          <ValidatedField
                            type="text"
                            name="city"
                            placeholder="Enter city here"
                          />
                        </div>
                        {isEdit && (
                          <div className="flex px-2 py-2">
                            {!showForecast && (
                              <button
                                disabled={values.city.trim().length < 3}
                                onClick={async (e) => {
                                  e.preventDefault();
                                  await fetchForecast(values.city);
                                  setShowForecast(true);
                                }}
                                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-xs"
                              >
                                Get forecast data
                              </button>
                            )}
                            {showForecast && (
                              <>
                                <div className="text-3xl font-bold text-gray-900">
                                  {forecastData.temp}
                                </div>
                                <div>
                                  <img
                                    src={forecastData.image}
                                    alt="forecast"
                                  />
                                </div>
                              </>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse relative">
                  <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                    <button
                      type="submit"
                      className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    >
                      {isEdit ? "Edit" : "Create"}
                    </button>
                  </span>
                  <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                    <button
                      onClick={() => {
                        isEdit &&
                          dispatch({
                            type: actions.CLEAN_CURRENT_REMINDER,
                          });
                        onClose();
                      }}
                      type="button"
                      className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    >
                      Cancel
                    </button>
                  </span>
                  <span className="absolute left-0 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto float-left">
                    {isEdit && (
                      <button
                        onClick={() => {
                          dispatch({
                            type: actions.DELETE_REMINDER,
                            payload: values.id,
                          });
                          onClose();
                        }}
                        type="button"
                        className="ml-8 text-left bg-red-500 hover:bg-red-400 text-white inline-flex justify-center w-full rounded-md border px-4 py-2 leading-6 font-medium shadow-sm focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                      >
                        Delete
                      </button>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func,
};

export default Modal;
