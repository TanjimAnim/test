import React from "react";
import { Data } from "../app/data";
import { useState, useEffect } from "react";

export default function Renderer({ data, siteData }) {
  if (data.id === "f68b88a3-a7ea-4d83-af62-f29630195832") {
    console.log(data);
  }
  //to check the width of the page
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  if (data.type === "Img") {
    return (
      <img
        src={data.settings.general.img.src}
        className={data.settings.general.className}
      />
    );
  }
  if (data.type === "Icon") {
    return (
      <i
        className={`${data.settings.general.icon.type}`}
        style={data.settings.general.icon.style.desktop}
      ></i>
    );
  }
  if (data.type === "Heading") {
    return (
      <data.settings.general.headingType
        className={data.settings.general.className}
        style={
          width > 960
            ? data.settings?.style?.desktop
            : width > 480
            ? data.settings?.style?.tablet
            : data.settings?.style?.mobile
        }
      >
        {data.settings.general.text}
      </data.settings.general.headingType>
    );
  }
  if (data.type === "Button") {
    return (
      <button style={data.settings.style.desktop}>
        {data.settings.general.text}
      </button>
    );
  }
  if (data.type === "Container") {
    return (
      <div key={data.id} className={data.settings.className}>
        {data.nodes.map((item) => {
          return <Renderer data={siteData.data[item]} siteData={siteData} />;
        })}
      </div>
    );
  }
  if (data.type === "Row") {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: `${data.settings.general.horizontalAlignment}`,
          alignItems: `${data.settings.general.verticalAlignment}`,
        }}
        className={data.settings.general.className}
      >
        {data.nodes.map((item) => {
          return <Renderer data={siteData.data[item]} siteData={siteData} />;
        })}
      </div>
    );
  }

  if (data.type === "Box") {
    return (
      <div
        className={data.settings.className}
        style={
          width > 960
            ? data.settings?.style?.desktop
            : width > 480
            ? data.settings?.style?.tablet
            : data.settings?.style?.mobile
        }
      >
        {data.nodes.map((item) => {
          return <Renderer data={siteData.data[item]} siteData={siteData} />;
        })}
      </div>
    );
  }

  return (
    <div>
      <data.componentName
        className={data.settings?.className}
        style={
          width > 960
            ? data.settings?.style?.desktop
            : width > 480
            ? data.settings?.style?.tablet
            : data.settings?.style?.mobile
        }
      >
        {data.nodes.map((item) => {
          return (
            <>
              {" "}
              <Renderer data={siteData.data[item]} siteData={siteData} />{" "}
            </>
          );
        })}
      </data.componentName>
    </div>
  );
}
