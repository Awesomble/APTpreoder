export interface valueText {
  value: any,
  text: string,
}
export interface areaPriority {
  area: any,
  areaTermDays: number
}
export interface adress {
  sido: valueText,
  city: valueText,
}
export interface AptData {
  aptTitle: string,
  description: string,
  aptType: string,
  adress: adress,
  areaPriority: areaPriority
}

export interface SurportFamilyYMD {
  parent1: string,
  parent2: string,
  my: string,
  spouse: string,
  children1: string,
  children2: string,
  children3: string,
  children4: string,
  children5: string,
}

export interface State {
  navi: boolean;
  average: any;
  surportIncomeSpouse: number,
  surportType: string;
  surportFamily: string;
  surportFamilyYMD: SurportFamilyYMD
  surportWeddingYMD: string;
  surportArea: string;
  surportAreaYMD: string;
  surportHomeLessYMD: string;
  surportBank: string;
  surportIncomeMy: number,
}

export function state() {
  return {
    navi: false,
    surportType: localStorage.surportType || '0',
    surportFamily: localStorage.surportFamily || '0 0 0',
    surportFamilyYMD: {
      parent1: localStorage.surportFamilyYMD ? JSON.parse(localStorage.surportFamilyYMD).parent1 : '',
      parent2: localStorage.surportFamilyYMD ? JSON.parse(localStorage.surportFamilyYMD).parent2 : '',
      my: localStorage.surportFamilyYMD ? JSON.parse(localStorage.surportFamilyYMD).my : '',
      spouse: localStorage.surportFamilyYMD ? JSON.parse(localStorage.surportFamilyYMD).spouse : '',
      children1: localStorage.surportFamilyYMD ? JSON.parse(localStorage.surportFamilyYMD).children1 : '',
      children2: localStorage.surportFamilyYMD ? JSON.parse(localStorage.surportFamilyYMD).children2 : '',
      children3: localStorage.surportFamilyYMD ? JSON.parse(localStorage.surportFamilyYMD).children3 : '',
      children4: localStorage.surportFamilyYMD ? JSON.parse(localStorage.surportFamilyYMD).children4 : '',
      children5: localStorage.surportFamilyYMD ? JSON.parse(localStorage.surportFamilyYMD).children5 : '',
    },
    surportWeddingYMD: localStorage.surportWeddingYMD || '',
    surportArea: localStorage.surportArea || '0 0',
    surportAreaYMD: localStorage.surportAreaYMD || '',
    surportHomeLessYMD: localStorage.surportHomeLessYMD || '',
    surportBank: localStorage.surportBank || '',
    surportIncomeMy: localStorage.surportIncomeMy || 0,
    surportIncomeSpouse: localStorage.surportIncomeSpouse || 0,
    average: [
      [0, 1495816, 2281268, 3120260, 3547103, 3547103, 3696824, 3889012, 4081200], // 50%
      [0, 1794979, 2737521, 3744312, 4256523, 4256523, 4436188, 4666814, 4897439], // 60%
      [0, 2094142, 3193775, 4368364, 4965944, 4965944, 5175553, 5444616, 5713679], // 70%
      [0, 2393305, 3650028, 4992416, 5675364, 5675364, 5914918, 6222418, 6529919], // 80%
      [0, 2692468, 4106282, 5616468, 6384785, 6384785, 6654282, 7000221, 7346159], // 90%
      [0, 2991631, 4562535, 6240520, 7094205, 7094205, 7393647, 7778023, 8162399], // 100%
      [0, 3290794, 5018789, 6864572, 7803626, 7803626, 8133012, 8555825, 8978639], // 110%
      [0, 3589957, 5475042, 7488624, 8513046, 8513046, 8872376, 9333628, 9794879], // 120%
      [0, 3889120, 5931296, 8112676, 9222467, 9222467, 9611741, 10111430, 10611119], // 130%
      [0, 4188283, 6387549, 8736728, 9931887, 9931887, 10351106, 10889232, 11427359], // 140%
      [0, 4487447, 6843803, 9360780, 10641308, 10641308, 11090471, 11667035, 12243599], // 150%
      [0, 4786610, 7300056, 9984832, 11350728, 11350728, 11829835, 12444837, 13059838], // 160%
    ],
  }
}
