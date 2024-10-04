import fs from "fs";
//Exercici  1

const data = fs.readFileSync("cotxes.json", "utf-8");

const cotxes = JSON.parse(data);

const newCar = [
  {
    matricula: "E-8938-JML",
    anyMatriculacio: 2002,
    combustible: "gasolina",
    canviManual: true,
    cv: 150,
    companyia: { marca: "bmw", model: "m4" },
    kilometres: 200000,
  },
  {
    matricula: "E-8943-XRC",
    anyMatriculacio: 2020,
    combustible: "diesel",
    canviManual: true,
    cv: 200,
    companyia: { marca: "bmw", model: "m3" },
    kilometres: 200000,
  },
  {
    matricula: "Z-2234-BMC",
    anyMatriculacio: 2011,
    combustible: "gasolina",
    canviManual: true,
    cv: 150,
    companyia: { marca: "jeep", model: "c2" },
    kilometres: 200000,
  },
];

// cotxes.push(newCar);

// try {
//   fs.writeFileSync("cotxes.json", JSON.stringify(cotxes));
// } catch (err) {
//   console.error(err);
// }

//Exercici 3
const cotxesMes2010 = (array) => {
  return array
    .filter((cotxe) => cotxe.anyMatriculacio > 2010)
    .map((cotxe) => ({
      matricula: cotxe.matricula,
      anyMatriculacio: cotxe.anyMatriculacio,
    }));
};

// console.log(cotxesMes2010(newCar));

//Exercici 4
const kilometratgeZero = (array) => {
  let copia = JSON.parse(JSON.stringify(array));
  for (let value of copia) {
    value.kilometres = 0;
  }

  return copia;
};

// console.table(kilometratgeZero(newCar));
// console.log("\n");
// console.table(newCar);
//Exercici 5

//Exercici 5
const agruparCotxes = (array) => {
  let result = [];

  array.forEach((cotxe) => {
    let foundBrand = result.find((item) => item.marca === cotxe.marca);

    if (foundBrand) {
      if (!foundBrand.model.includes(cotxe.model)) {
        foundBrand.model.push(cotxe.model);
      }
    } else {
      result.push({
        marca: cotxe.marca,
        model: [cotxe.model],
      });
    }
  });

  return result;
};
const agruparCotxesB = (array) => {
  let result = {};

  array.forEach((cotxe) => {
    if (!result[cotxe.marca]) {
      result[cotxe.marca] = [];
    }
    if (!result[cotxe.marca].includes(cotxe.model)) {
      result[cotxe.marca].push(cotxe.model);
    }
  });

  return result;
};
console.log(agruparCotxesB(cars));

//Exercici 6

const estudiant = [
  {
    nom: "jona",
    edat: 19,
    notes: [5, 4, 7, 9, 6, 2],
    mitjana: function calcularMitjanaNotes(array) {
      let suma = 0;
      for (let i = 0; i < array.length; i++) {
        suma += array[i];
      }
      let mitjana = suma / array.length;
      return mitjana;
    },
  },
];
