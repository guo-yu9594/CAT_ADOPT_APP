import React from "react";
import "../App.css";
import Card from "./Card"

const CardsContainer = ({ details }) => {
    const arr1 = [
        "https://cdn.futura-sciences.com/buildsv6/images/wide1920/a/0/f/a0fc73919d_50166390_chaton.jpg",
        "https://www.journaldugeek.com/content/uploads/2021/11/template-jdg-25.jpg",
        "https://www.sciencesetavenir.fr/assets/img/2020/01/17/cover-r4x3w1000-5e21bf77a1547-chartreux-3298051-1920.jpg",
        "https://cdn.futura-sciences.com/buildsv6/images/wide1920/a/0/f/a0fc73919d_50166390_chaton.jpg",
        "https://www.parc-chartreuse.net/content/uploads/2018/03/chat_forestier_2.jpg",
      ];
      const arr2 = [
        "https://www.journaldugeek.com/content/uploads/2021/11/template-jdg-25.jpg",
        "https://www.parc-chartreuse.net/content/uploads/2018/03/chat_forestier_2.jpg",
        "https://cdn.futura-sciences.com/buildsv6/images/wide1920/a/0/f/a0fc73919d_50166390_chaton.jpg",
        "https://cdn.futura-sciences.com/buildsv6/images/wide1920/a/0/f/a0fc73919d_50166390_chaton.jpg",
        "https://www.sciencesetavenir.fr/assets/img/2020/01/17/cover-r4x3w1000-5e21bf77a1547-chartreux-3298051-1920.jpg",
      ];
      const arr3 = [
        "https://cdn.futura-sciences.com/buildsv6/images/wide1920/a/0/f/a0fc73919d_50166390_chaton.jpg",
        "https://www.journaldugeek.com/content/uploads/2021/11/template-jdg-25.jpg",
        "https://cdn.futura-sciences.com/buildsv6/images/wide1920/a/0/f/a0fc73919d_50166390_chaton.jpg",
        "https://www.parc-chartreuse.net/content/uploads/2018/03/chat_forestier_2.jpg",
        "https://www.sciencesetavenir.fr/assets/img/2020/01/17/cover-r4x3w1000-5e21bf77a1547-chartreux-3298051-1920.jpg",
      ];
      const arr4 = [
        "https://cdn.futura-sciences.com/buildsv6/images/wide1920/a/0/f/a0fc73919d_50166390_chaton.jpg",
        "https://cdn.futura-sciences.com/buildsv6/images/wide1920/a/0/f/a0fc73919d_50166390_chaton.jpg",
        "https://www.journaldugeek.com/content/uploads/2021/11/template-jdg-25.jpg",
        "https://www.parc-chartreuse.net/content/uploads/2018/03/chat_forestier_2.jpg",
        "https://www.sciencesetavenir.fr/assets/img/2020/01/17/cover-r4x3w1000-5e21bf77a1547-chartreux-3298051-1920.jpg",
      ];
      const arr5 = [
        "https://cdn.futura-sciences.com/buildsv6/images/wide1920/a/0/f/a0fc73919d_50166390_chaton.jpg",
        "https://cdn.futura-sciences.com/buildsv6/images/wide1920/a/0/f/a0fc73919d_50166390_chaton.jpg",
        "https://www.journaldugeek.com/content/uploads/2021/11/template-jdg-25.jpg",
        "https://www.parc-chartreuse.net/content/uploads/2018/03/chat_forestier_2.jpg",
        "https://www.sciencesetavenir.fr/assets/img/2020/01/17/cover-r4x3w1000-5e21bf77a1547-chartreux-3298051-1920.jpg",
      ];

  return (
    <div className="Cards-container">
      <Card details={arr1} />
      <Card details={arr2} />
      <Card details={arr3} />
      <Card details={arr4} />
      <Card details={arr5} />
    </div>
  );
};

export default CardsContainer;
