import React from "react";
import mapData from "../../../config/Api";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

require("highcharts/modules/map")(Highcharts);

const dataTest = [
    { id: "IR.AL", count: "100", lat: 51.507222, lon: -0.1275 },
    { id: "IR.KE", count: "200", lat: 50.6072000, lon: -0.1275 },
    { id: "IR.SB", count: "300", lat: 53.799722, lon: -1.549167 },
    { id: "IR.KV", count: "IR.KV", lat: 55.858, lon: -4.259 },
    { id: "IR.KS", count: "400", lat: 53.383611, lon: -1.466944 }
]
class MapChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mapData: null
        };

        this.options = {
            title: {
                text: "Widget click by location",
                style: {
                    color: "#fff"
                }
            },
            chart: {
                backgroundColor: "transparent",
                // type: "map",
                map: 'countries/gb/gb-all',


                map: null
            },
            mapNavigation: {
                enabled: true,
                enableButtons: false
            },
            credits: {
                enabled: false
            },
            colorAxis: {
                dataClasses: [
                    {
                        from: 1,
                        color: "#e5e8ed",
                        name: "widget name one"
                    },
                    {
                        from: 2,
                        color: "#e5e8ed",
                        name: "widget name two"
                    }
                ]
            },
            tooltip: {

                pointFormatter: function () {
                    return (this.name + this.count);
                }
            },
            legend: {
                align: "right",
                verticalAlign: "top",
                x: -100,
                y: 70,
                floating: true,
                layout: "vertical",
                valueDecimals: 0,
                backgroundColor:
                    // theme
                    (Highcharts.defaultOptions &&
                        Highcharts.defaultOptions.legend &&
                        Highcharts.defaultOptions.legend.backgroundColor) ||
                    "rgba(255, 255, 255, 0.85)"
            },
            series: [
                {
                    name: "world map",
                    dataLabels: {
                        enabled: true,
                        color: "#FFFFFF",
                        format: "{point.postal-code}",
                        style: {
                            textTransform: "uppercase"
                        }
                    },
                    tooltip: {
                        backgroundColor: 'none',
                        borderWidth: 0,
                        shadow: false,
                        useHTML: true,
                        padding: 0,
                        pointFormat: '<span class="f32"><span class="flag {point.properties.hc-key}">' +
                            '</span></span> {point.name}<br>' +
                            '<span style="font-size:30px">{point.value}/km²</span>',
                        positioner: function () {
                            return { x: 0, y: 250 };
                        }
                    },

                    // tooltip: {
                    //   ySuffix: " %"
                    // },
                    cursor: "pointer",
                    joinBy: "postal-code",
                    data: [],
                    // point: {
                    //     events: {
                    //         click: function (r) {
                    //             console.log("click - to open popup as 2nd step");
                    //             console.log(r);
                    //         }
                    //     }
                    // }
                }
            ]
        };

        // get the world map data
        mapData.getWorld().then(r => {
            this.setState({ mapData: r.data }, () => {
                this.options.series[0].data = []; //make sure data is empty before  fill
                this.options["chart"]["map"] = this.state.mapData; // set the map data of the graph (using the world graph)

                // filling up some dummy data with values 1 and 2
                // instead of using the google sheet
                for (let i in this.state.mapData["features"]) {
                    let mapInfo = this.state.mapData["features"][i];
                    if (mapInfo["id"]) {
                        var postalCode = mapInfo.properties["postal-code"];

                        var name = mapInfo["properties"]["name"];
                        var value = (i % 2) + 1;
                        var type = value === 1 ? "widget name one" : "widget name two";
                        var row = mapInfo.id;
                        var id = mapInfo.id;
                        let index1 = dataTest.findIndex((item) => { return item.id == this.id })
                        let index = Math.abs(index1)
                        let count = dataTest[index].count ? dataTest[index].count : "op"
                        this.options.series[0].data.push({
                            value: value,
                            name: name,
                            "postal-code": postalCode,
                            row: row,
                            type: type,
                            id: id,
                            count: count
                        });
                    }
                }
                // updating the map options
                this.setState({ mapOptions: this.options });
            });
        });
    }

    render() {
        return (
            <div>

                {this.state.mapOptions ? (
                    <HighchartsReact
                        highcharts={Highcharts}
                        constructorType={"mapChart"}
                        options={this.state.mapOptions}
                    />
                ) : (
                        ""
                    )}
            </div>
        );
    }
}

export default MapChart;
