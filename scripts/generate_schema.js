const fs = require('fs');

function b(a) { return a ? (a ^ Math.random() * 16 >> a / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, b) }

const [,,units, floors, path] = process.argv;

let data = {
    units: [],
    groups: [
        {
            id: b(),
            type: 'HOTEL',
            title: 'YOUR_HOTEL_NAME_HERE',
            children: []
        }
    ]
};

for (let i = 0; i < floors; i++) {
    const f = {
        id: b(),
        type: 'FLOOR',
        title: `Floor ${i + 1}`,
        children: []
    };
    data.groups.push(f);
    data.groups[0].children.push({id: f.id});
    for (let j = 0; j < units; j++) {
        const u = {
            id: b(),
            title: `Unit ${j + 1}`,
            type: 'PRIVATE'
        };
        data.units.push(u);
        f.children.push({
            id: u.id,
            isUnit: true
        });
    }
}

const SCHEMA_PATH = path ? path : './schema.json';
fs.writeFile(SCHEMA_PATH, JSON.stringify(data), err => {
    if(err) throw err;
    console.log(`saved at ${SCHEMA_PATH}`);
});
