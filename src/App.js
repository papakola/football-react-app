import { HeaderComponent } from "./components/HeaderComponent";
import { CalendarPage } from "./pages/CalendarPage";
import { StatisticsPage } from "./pages/StatisticsPage";
import { SuperfinalPage } from "./pages/SuperfinalPage";
import { TablesPage } from "./pages/TablesPage";

function App() {
  return (
    <div className="app">
      <HeaderComponent/>
      <div className="app_title">Каледарь</div>
      <CalendarPage/>
      <div className="app_title">Турнирная таблица</div>
      <TablesPage/>
      <div className="app_title">Игры суперфинала</div>
      <SuperfinalPage/>
      <div className="app_title">Статистика команды</div>
      <StatisticsPage/>
    </div>
  );
}

export default App;
