import React from "react";
import { Routes, Route } from "react-router-dom";
import { Search } from "../layouts";
import {
  Home,
  About,
  TeamDetail,
  Teams,
  Fixture,
  Table,
  CallUp,
  Notifications,
  Inscriptions,
  PlayerDetail,
  Credentials,
  LiveMatch,
} from "../pages";
import TeamCategories from "../pages/TeamCategories";
import TopScorerTable from "../pages/TopScorerTable";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Search />}>
        <Route path="/about" element={<About />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/call-up" element={<CallUp />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/inscriptions" element={<Inscriptions />} />
      </Route>
      <Route path="/team-detail" element={<TeamDetail />} />
      <Route path="/player-detail" element={<PlayerDetail />} />
      <Route path="/credentials" element={<Credentials />} />
      <Route path="/fixture" element={<Fixture />} />
      <Route path="/table" element={<Table />} />
      <Route path="/team-categories" element={<TeamCategories />} />
      <Route path="/top-scorers-table" element={<TopScorerTable />} />
      <Route path="/live-match" element={<LiveMatch />} />
    </Routes>
  );
};

export default AppRouter;
