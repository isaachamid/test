const Human = require('./humans.model');
const humans = [
    {
        'name' : 'Jack',
        'age' : 30,
        'pets' : [
            {
                'name' : 'Jack-pet-1',
                'type' : 1
            },
            {
                'name' : 'Jack-pet-2',
                'type' : 2
            },
        ]
    },
    {
        'name' : 'Jane',
        'age' : 31,
        'pets' : [
            {
                'name' : 'Jane-pet-1',
                'type' : 3
            },
            {
                'name' : 'Jane-pet-2',
                'type' : 4
            },
        ]
    }
]


module.exports = {
    list: (req, res) => {
        let data = [];
        for (var i in humans) {
            data[i] = {
                'name': humans[i].name,
                'age': humans[i].age
            };
        }
        res.status(200).json({ message: "Humans List", data : data});
    },
    pets: (req, res) => {
        const humanName = req.params.humanName;
        let data;
        let flag = true;
        for (var i in humans) {
            if (humans[i].name.toUpperCase() == humanName.toUpperCase()) {
                flag = false;
                if (humans[i].name.toUpperCase() == 'JANE' && humans[i].age > 30) {
                    data = 0;
                } else {
                    data = humans[i].pets;
                }
            }
        }
        if(flag) {
            res.status(200).json({message: humanName + " Not Found In System!"});
        } else {
            res.status(200).json({message: humanName + "'s Pets List", data: data});
        }
    },
}