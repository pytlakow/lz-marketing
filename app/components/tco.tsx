import React, { useState } from "react";
import {

LineChart,
Line,
XAxis,
YAxis,
Tooltip,
Legend,
ResponsiveContainer,
BarChart,
Bar,
Rectangle,
} from "recharts";

// Parse the CSV data into a usable array of objects
const rawData = `
Retention,size,LogZilla,Splunk Cloud,Splunk ENT,ELK Cloud,ELK OnPrem,LogRhythm
30 Days,0.5,850,30004,38066,25649,27945,20241
30 Days,5,8000,35541,54199,30987,37286,23166
30 Days,10,13000,41156,62208,36023,45946,26312
30 Days,50,45000,75134,86156,44270,59650,44183
30 Days,100,55000,117276,128976,59045,85971,75121
30 Days,200,65000,195910,214377,74447,112046,92147
30 Days,300,70000,270635,305091,101701,162292,121839
30 Days,500,100000,416267,471186,145892,243571,178846
30 Days,750,125000,590405,695296,216797,378430,244619
30 Days,1000,150000,754648,913770,278667,496008,303849
30 Days,1500,175000,1066029,1339354,397968,723674,421964
30 Days,2000,200000,1337527,1767856,520382,960152,528244
30 Days,2500,225000,1574147,2201510,645913,1205567,623602
30 Days,3000,250000,1805894,2633496,771529,1453613,708882
30 Days,4000,325000,2291831,3489410,1014985,1932994,891374
30 Days,4500,375000,2461355,3922700,1140785,2187517,953740
30 Days,5000,500000,2606028,4362458,1272753,2457797,1008524
30 Days,7500,750000,3504573,6498676,1884932,3679914,1423816
30 Days,10000,1000000,4153282,8630438,2497220,4889478,1797622
3 Months,0.5,860,30012,38075,25696,27599,20249
3 Months,5,8100,35622,54291,31460,35121,23247
3 Months,10,13100,41318,62391,36970,42443,26474
3 Months,50,45200,75945,87075,49005,58907,44994
3 Months,100,55200,118898,130811,68515,86294,76743
3 Months,200,65200,199153,218046,93386,120990,95391
3 Months,300,70200,275500,310596,130110,173909,126704
3 Months,500,100500,424376,480361,193241,265260,186954
3 Months,750,125500,602567,709057,287819,405476,256781
3 Months,1000,150500,770865,932116,373363,533703,320066
3 Months,1500,175500,1090354,1366871,540013,781025,446289
3 Months,2000,200500,1369960,1804542,709776,1035319,560677
3 Months,2500,225500,1614688,2247364,882655,1296722,664144
3 Months,3000,250500,1854544,2688515,1055619,1560351,757532
3 Months,4000,325500,2356698,3562756,1393772,2074074,956241
3 Months,4500,375500,2534330,4005207,1566920,2343206,1026715
3 Months,5000,500500,2687111,4454123,1746237,2624892,1089607
3 Months,7500,750500,3626198,6636111,2595157,3928005,1545441
3 Months,10000,1000500,4315449,8813601,3444187,5263312,1959788
6 Months,0.5,870,30014,38089,25757,27698,20488
6 Months,5,8200,35644,54448,32071,36149,25394
6 Months,10,13200,41362,62677,38192,44379,30699
6 Months,50,45400,76166,88451,55112,68520,65840
6 Months,100,55400,119340,133564,80729,105384,127185
6 Months,200,65400,200038,223551,117815,158907,161275
6 Months,300,70400,276827,318853,166753,230407,220635
6 Months,500,101000,426587,494122,254312,358814,335815
6 Months,750,126000,605884,729698,379426,544925,469086
6 Months,1000,151000,775287,959638,495505,718498,589203
6 Months,1500,176000,1096987,1408147,723226,1057386,830146
6 Months,2000,201000,1378804,1859572,954060,1402709,1047341
6 Months,2500,226000,1625743,2316145,1188010,1754618,1242613
6 Months,3000,251000,1867810,2771045,1422045,2108245,1417643
6 Months,4000,326000,2374386,3672776,1882340,2802521,1793271
6 Months,4500,376000,2554229,4128967,2116559,3160409,1922289
6 Months,5000,501000,2709221,4591620,2356947,3530381,2036042
6 Months,7500,751000,3659363,6842261,3511222,5282524,2895768
6 Months,10000,1001000,4359669,9088341,4665607,7059664,3672414
1 Year,0.5,880,31515,39566,26879,28743,21963
1 Year,5,8300,37230,55774,34342,37607,30705
1 Year,10,13300,43038,63862,41736,46441,40186
1 Year,50,45600,78012,87975,68478,74681,108357
1 Year,100,55600,121382,141045,106361,126988,228619
1 Year,200,65600,202389,236681,167924,201526,292988
1 Year,300,70600,279492,337836,241342,294539,407839
1 Year,500,101500,429789,524520,377801,466131,631614
1 Year,750,126500,609738,774342,564026,707064,890178
1 Year,1000,151500,779798,1018531,741221,936560,1122367
1 Year,1500,176500,1102707,1495436,1091101,1385497,1589498
1 Year,2000,201500,1385738,1975254,1444098,1841945,2009060
1 Year,2500,226500,1633897,2460220,1800215,2306028,2384697
1 Year,3000,251500,1877191,2943517,2156423,2772852,2719769
1 Year,4000,326500,2386092,3901912,2860975,3692330,3442672
1 Year,4500,376500,2567176,4386478,3217376,4165903,3685544
1 Year,5000,501500,2723416,4877524,3579950,4652505,3897794
1 Year,7500,751500,3679181,7284447,5344744,6972253,5548766
1 Year,10000,1001500,4385119,9656685,7109653,9331391,7033473
5 Years,0.5,900,31524,39841,27525,29648,21972
5 Years,5,8500,37317,58519,40802,46655,30792
5 Years,10,13500,43213,69351,54657,64538,40361
5 Years,50,46000,78885,115342,133080,165212,109230
5 Years,100,56000,123129,185695,235566,297970,230366
5 Years,200,66000,205883,326081,426334,543491,296483
5 Years,300,71000,284734,471782,628957,807485,413081
5 Years,500,102000,438525,747757,1023827,1321042,640350
5 Years,750,127000,622842,1109180,1533065,1989430,903282
5 Years,1000,152000,797270,1464958,2033273,2646381,1139839
5 Years,1500,177000,1128915,2178347,3029179,3963563,1615706
5 Years,2000,202000,1420682,2867937,4028202,5261588,2044004
5 Years,2500,227000,1677577,3575960,5030345,6580581,2428377
5 Years,3000,252000,1929607,4282273,6032579,7902316,2772185
5 Years,4000,327000,2455980,5686554,8029183,10531615,3512560
5 Years,4500,377000,2645800,6394015,9031610,11860098,3764168
5 Years,5000,502000,2810776,7107883,10040210,13201611,3985154
5 Years,7500,752000,3810221,10613333,15035134,19795912,5679806
5 Years,10000,1002000,4559839,14112996,20030173,26429603,7208193
10 Years,0.5,950,33110,41695,28586,30970,23033
10 Years,5,9000,39080,62963,42014,50452,32004
10 Years,10,14000,45168,76669,56033,71103,41737
10 Years,50,47000,81801,75046,135388,150061,111538
10 Years,100,57000,127227,243424,239026,353594,233826
10 Years,200,67000,212262,439716,432042,653569,302191
10 Years,300,72000,293397,641326,636917,972021,421040
10 Years,500,103000,451661,1029017,1036224,1594443,652747
10 Years,750,128000,641549,1530047,1550996,2398902,921213
10 Years,1000,153000,821553,2025423,2056741,3191926,1163308
10 Years,1500,178000,1164240,3004523,3063650,4767868,1650177
10 Years,2000,203000,1467055,3986434,4073678,6351324,2089480
10 Years,2500,228000,1735005,4973385,5086831,7942419,2484863
10 Years,3000,253000,1998097,5958576,6100079,9536259,2839685
10 Years,4000,328000,2546458,7920295,8118622,12709692,3601999
10 Years,4500,378000,2747354,8906454,9132073,14310287,3864631
10 Years,5000,503000,2923414,9898953,10151702,15923917,4096646
10 Years,7500,753000,3977631,14796088,15201341,23878442,5846012
10 Years,10000,1003000,4782029,19685909,20251100,31872353,7429120
`;

function parseCSV(csv: string) {
const lines = csv.trim().split("\n");
const headers = lines[0].split(",");
return lines.slice(1).map((line) => {
    const values = line.split(",");
    const obj: Record<string, string | number> = {};
    headers.forEach((header, i) => {
        obj[header] =
            i === 1
                ? parseFloat(values[i])
                : i > 1
                ? Number(values[i])
                : values[i];
    });
    return obj;
});
}

const data = parseCSV(rawData);

const retentionOptions = Array.from(
new Set(data.map((row) => row.Retention as string))
);

const sizeOptions = Array.from(
new Set(data.map((row) => row.size as number))
);

const providers = [
"LogZilla",
"Splunk Cloud",
"Splunk ENT",
"ELK Cloud",
"ELK OnPrem",
"LogRhythm",
];

export default function TCOChart() {
const [retention, setRetention] = useState(retentionOptions[0]);
const [size, setSize] = useState(sizeOptions[0]);

// Filter data for selected retention and size
const filteredRows = data.filter(
    (row) => row.Retention === retention && row.size === size
);

// If no exact match, show all for selected retention
const chartData =
    filteredRows.length > 0
        ? filteredRows
        : data.filter((row) => row.Retention === retention);

return (
    <section className="container mx-auto max-w-3xl py-8 px-4 text-center">
        <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
            <label style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                Retention:
                <input
                    type="range"
                    min={0}
                    max={retentionOptions.length - 1}
                    value={retentionOptions.indexOf(retention)}
                    onChange={(e) => setRetention(retentionOptions[Number(e.target.value)])}
                    style={{ width: 180, marginTop: 8 }}
                />
                <span style={{ marginTop: 4 }}>{retention}</span>
            </label>
            <label style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                Size (GB/day):
                <input
                    type="range"
                    min={0}
                    max={sizeOptions.length - 1}
                    value={sizeOptions.indexOf(size)}
                    onChange={(e) => setSize(sizeOptions[Number(e.target.value)])}
                    style={{ width: 180, marginTop: 8 }}
                />
                <span style={{ marginTop: 4 }}>{size}</span>
            </label>
            <label>
                Retention:
                <select
                    value={retention}
                    onChange={(e) => setRetention(e.target.value)}
                    style={{ marginLeft: 8 }}
                >
                    {retentionOptions.map((opt) => (
                        <option key={opt} value={opt}>
                            {opt}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Size (GB/day):
                <select
                    value={size}
                    onChange={(e) => setSize(Number(e.target.value))}
                    style={{ marginLeft: 8 }}
                >
                    {sizeOptions.map((opt) => (
                        <option key={opt} value={opt}>
                            {opt}
                        </option>
                    ))}
                </select>
            </label>
        </div>
        <ResponsiveContainer width="100%" height={400}>
            <BarChart
                data={chartData}
                margin={{ top: 20, right: 40, left: 0, bottom: 20 }}
                width={500}
            >
                <XAxis
                    dataKey="size"
                 
                />
              
                <YAxis
                    label={{ value: "Price (USD)", angle: -90, position: "insideLeft" }}
                    tickFormatter={(value: number) => {
                        if (value >= 1_000_000) return `${Math.round(value / 1_000_000)}M`;
                        if (value >= 1_000) return `${Math.round(value / 1_000)}k`;
                        return Math.round(value).toString();
                    }}
                />

                
                <Legend />
                {/* <Bar dataKey="value" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} /> */}
                {providers.map((provider, idx) => (
                    <Bar
                        key={provider}
                        dataKey={provider}
                        fill={
                            [
                                "#0088FE",
                                "#00C49F",
                                "#FFBB28",
                                "#FF8042",
                                "#A28BFE",
                                "#FE8B8B",
                            ][idx]
                        }
                        barSize={30}
                    />
                ))}
            </BarChart>
        </ResponsiveContainer>

    </section>
);
}