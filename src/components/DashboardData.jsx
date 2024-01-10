import React from "react";
import { genderAPI, employeeTypeAPI } from "./Api";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

const calculateTotalUsers = (data) => {
  const total = data.reduce((totalCount, item) => totalCount + item.count, 0);
  const maleCount = data.find((item) => item.gender === "Male")?.count || 0;
  const femaleCount = data.find((item) => item.gender === "Female")?.count || 0;
  return { total, maleCount, femaleCount };
};

const calculateTotalEmployees = (data) => {
  const total = data.reduce(
    (totalCount, item) => totalCount + item.totalEmployees,
    0
  );
  const fullTimeCount =
    data.find((item) => item.employeeType === "Full-Time")?.totalEmployees || 0;
  const partTimeCount =
    data.find((item) => item.employeeType === "Part-Time")?.totalEmployees || 0;
  const dailyWagesCount =
    data.find((item) => item.employeeType === "Daily Wages")?.totalEmployees ||
    0;
  return { total, fullTimeCount, partTimeCount, dailyWagesCount };
};

const DashboardData = () => {
  const {
    total: totalUsersGender,
    maleCount,
    femaleCount,
  } = calculateTotalUsers(genderAPI);
  const totalUsersEmployeeType = calculateTotalEmployees(employeeTypeAPI);

  const malePercentage = (maleCount / totalUsersGender) * 100;
  const femalePercentage = (femaleCount / totalUsersGender) * 100;

  const genderChartData = {
    labels: ["Male", "Female"],
    datasets: [
      {
        data: [malePercentage, femalePercentage],
        backgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  const employmentTypeChartData = {
    labels: ["Full Time", "Part Time", "Daily Wages"],
    datasets: [
      {
        data: [
          (totalUsersEmployeeType.fullTimeCount /
            totalUsersEmployeeType.total) *
            100,
          (totalUsersEmployeeType.partTimeCount /
            totalUsersEmployeeType.total) *
            100,
          (totalUsersEmployeeType.dailyWagesCount /
            totalUsersEmployeeType.total) *
            100,
        ],
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
      },
    ],
  };



  return (
    <>
      <div
        class="container rounded-4"
        style={{ height: "95vh", backgroundColor: "#93B1A6" }}
      >
        <div class="row">
          <div
            className="col p-3 border-bottom border-secondary border-2"
            style={{ height: "50vh" }}
          >
            <h4 className="d-flex justify-content-start">
              KEY PERFORMANCE INDICATORS
            </h4>
            <div className="data--container d-flex justify-content-between p-3 text-light">
              <h4>GENDER</h4>
              {/* <h4 >PIE CHART</h4> */}
              <div style={{ height: "200px", width: "300px" }}>
                <Pie data={genderChartData} />
              </div>
              <div className="data d-block">
                <p>TOTAL USERS = {totalUsersGender}</p>
                <p>MALE = {maleCount}</p>
                <p>FEMALE = {femaleCount}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div className="col p-3" style={{ height: "45vh" }}>
            <div className="data--container d-flex justify-content-between p-3 text-light">
              <h4>
                EMPLOYMENT
                <br />
                TYPE
              </h4>
              <div className="p-2" style={{ height: "240px", width: "300px" }}>
                <Pie data={employmentTypeChartData} />
              </div>
              <div className="data d-block">
                <p>TOTAL EMPLOYEES = {totalUsersEmployeeType.total}</p>
                <p>FULL TIME = {totalUsersEmployeeType.fullTimeCount}</p>
                <p>PART TIME = {totalUsersEmployeeType.partTimeCount}</p>
                <p>DAILY WAGES = {totalUsersEmployeeType.dailyWagesCount}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardData;
