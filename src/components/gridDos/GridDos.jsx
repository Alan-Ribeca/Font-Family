import "./gridDos.scss";

export const GridDos = () => {
  return (
    <>
      <div className="containerGridTable">
        <hr className="brCalendarioTop" />
        <p className="calendario">Calendario</p>
        <p className="mes">Abril</p>
        <table className="gridDos">
          <thead className="thead">
            <tr className="tr">
              <th className="th">Lu</th>
              <th className="th">Ma</th>
              <th className="th">Mi</th>
              <th className="th">Ju</th>
              <th className="th">Vi</th>
              <th className="th">Sa</th>
              <th className="th">Do</th>
            </tr>
          </thead>
          <tbody>
            <tr className="tr">
              <td className="th">1</td>
              <td className="th">2</td>
              <td className="th">3</td>
              <td className="th">4</td>
              <td className="th">5</td>
              <td className="th">6</td>
              <td className="th">7</td>
            </tr>
            <tr className="tr">
              <td className="th">8</td>
              <td className="th">9</td>
              <td className="th">10</td>
              <td className="th">11</td>
              <td className="th">12</td>
              <td className="th">13</td>
              <td className="th">14</td>
            </tr>
            <tr className="tr">
              <td className="th">15</td>
              <td className="th">16</td>
              <td className="th">17</td>
              <td className="th">18</td>
              <td className="th">19</td>
              <td className="th">20</td>
              <td className="th">21</td>
            </tr>
            <tr className="tr">
              <td className="th">22</td>
              <td className="th">23</td>
              <td className="th">24</td>
              <td className="th">25</td>
              <td className="th">26</td>
              <td className="th">27</td>
              <td className="th">28</td>
            </tr>
            <tr className="tr">
              <td className="th">29</td>
              <td className="th">30</td>
              <td className="th"></td>
              <td className="th"></td>
            </tr>
          </tbody>
        </table>
        <hr className="brCalendarioButtom" />
        <button className="btnCalendario">Ver mas</button>
      </div>
    </>
  );
};
