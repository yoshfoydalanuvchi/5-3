// 1-masala

function kop(son) {
  const ikki = son * 2;
  return [son, ikki];
}

// 2-masala

function perYuza(eni, boyi) {
  let per = (eni + boyi) * 2;
  let yuza = eni * boyi;
  if (per > yuza) {
    return per;
  } else {
    return yuza;
  }
}

// 3-masala

function vaqt(bosh, qosh) {
  return bosh + qosh;
}

// 5-masala
function ketma(son) {
  const yig = (son * (son + 1)) / 2;
  const kub = yig * yig;
  const ild = Math.sqrt(kub);
  return ild == Math.floor(ild);
}

// 6-masala

function jarima(xato, togri) {
  const xatoJar = 5;
  const xatoUmum = xato * xatoJar;
  const yaxlit = Math.ceil(togri / 60) * 60;
  const umum = xatoUmum + yaxlit;
  return umum;
}

// 7-masala

function kop(a, b, c) {
  if (a != b && b != c) {
    let nat = a * b * c;
    return nat;
  }
}

// 8-masala

function harorat(sel) {
  const kel = sel + 273.15;
  const far = (sel * 9) / 5 + 32;

  return {
    kelvin: kel,
    farengeyt: far,
  };
}

// 9-masala

function uch7(bosh, oxir) {
  const nat = [];

  for (let son = bosh; son <= oxir; son++) {
    if (son % 3 == 0 && son % 7 !== 0) {
      nat.push(son);
    }
  }

  return nat;
}

const bolSon = uch7(10, 50);

// 10-masala

function amal(n) {
  if (n == 1) {
    return 1;
  }

  const ich = amal(n - 1);
  return n * ich + 4 * n + ich;
}

// 12-masala

function karra(n) {
  let son = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0 && i % 7 == 0) {
      son.push(i);
    }
  }
  return son;
}

// 13-masala

function maxKop(boy, max) {
  const tiy = boy * 100;
  return Math.floor(tiy / max);
}

// 14-masala

function nol(n, m) {
  let san = 0;

  for (let i = n; i <= m; i++) {
    let son = i;
    while (son % 5 == 0) {
      san++;
      son /= 5;
    }
  }

  return san;
}

// 15-masala

function yosh(N, K) {
  if (K == 1) {
    return "Xato: K 1 bo'lishi mumkin emas";
  }

  const Ali = N / (1 - 1 / K);
  const Vali = Ali / K;

  return { Ali: Ali, Vali: Vali };
}

// 16-masala

function yig(n) {
  const bir = n + 1;
  const nlar = (3 * (n * (n + 1))) / 2;
  const kvad = (3 * (n * (n + 1) * (2 * n + 1))) / 6;

  return bir + nlar + kvad;
}
