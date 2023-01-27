import { roadmapData } from "../../../configs/roadmapData";

export const RoadmapMobile = () => {
  return (
    <div className="mobile_road_map_flex">
      {roadmapData.map((val, index) => (
        <div
          key={index}
          className="mobile_road_map_inner"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="mobile_road_map_img d-flex justify-content-center align-items-center">
            <p className="roadmap-percent">{val.percent}</p>
          </div>
          <div className="mobile_road_map_text">
            <div className="home_road_map_text">
              <h3>{val.title}</h3>
              <p className="sub-title">Estimated Time: {val.et}</p>
              <p>{val.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
