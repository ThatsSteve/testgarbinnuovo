export interface MedicalService {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc?: string;
  paragraphs?: string[];
  isSecondOpinion?: boolean;
}

export const medicalServices: MedicalService[] = [
  {
    id: "visita-ginecologica",
    title: "VISITA GINECOLOGICA E CONTROLLI PERIODICI",
    shortDesc: "Prevenzione, diagnosi precoce e gestione personalizzata delle problematiche dell'apparato genitale femminile."
  },
  {
    id: "controllo-gravidanza-ostetricia",
    title: "CONTROLLO GRAVIDANZA E ASSISTENZA OSTETRICA",
    shortDesc: "Valutazione clinica specialistica della gravidanza, benessere materno-fetale e percorso nascita."
  },
  {
    id: "ecografia-ginecologica-ostetrica",
    title: "ECOGRAFIA GINECOLOGICA E OSTETRICA",
    shortDesc: "Inquadramento ecografico pelvico e transvaginale a supporto diagnostico e monitoraggio ostetrico."
  },
  {
    id: "prevenzione-pap-test",
    title: "PREVENZIONE ONCOLOGICA E PAP TEST",
    shortDesc: "Screening citologico cervicale, Pap test ed esami di prevenzione delle patologie oncologiche genitali."
  },
  {
    id: "menopausa",
    title: "MENOPAUSA E DISTURBI DEL CLIMATERIO",
    shortDesc: "Inquadramento clinico dei disturbi perimenopausali e postmenopausali, percorsi terapeutici personalizzati."
  },
  {
    id: "endometriosi",
    title: "ENDOMETRIOSI E DOLORE PELVICO CRONICO",
    shortDesc: "Diagnosi clinica specialistica, ecografia di supporto e definizione della strategia terapeutica."
  },
  {
    id: "pcos",
    title: "PCOS - SINDROME DELL'OVAIO POLICISTICO",
    shortDesc: "Inquadramento endocrino-ginecologico, regolarizzazione del ciclo e monitoraggio clinico."
  },
  {
    id: "chirurgia-ginecologica",
    title: "VALUTAZIONE CHIRURGICA GINECOLOGICA",
    shortDesc: "Consulenza specialistica su indicazioni a interventi chirurgici ginecologici e alternative conservative."
  },
  {
    id: "second-opinion",
    title: "SECOND OPINION",
    shortDesc: "Un ulteriore parere specialistico quando è necessario prendere una decisione diagnostica o terapeutica.",
    isSecondOpinion: true,
    paragraphs: [
      "Un ulteriore parere specialistico quando è necessario prendere una decisione diagnostica o terapeutica.",
      "Una diagnosi o la proposta di un intervento chirurgico possono generare dubbi e interrogativi. Una seconda valutazione specialistica può aiutare a comprendere meglio la situazione, confrontare le possibilità terapeutiche e affrontare una decisione con maggiore consapevolezza.",
      "La lunga esperienza maturata nella chirurgia ginecologica permette di valutare una problematica non soltanto dal punto di vista diagnostico, ma anche considerando le eventuali possibilità chirurgiche e le alternative terapeutiche."
    ]
  }
];

export const bookingNotice = {
  title: "Per prenotare una visita",
  phone: "339 413 2022",
  phoneTel: "tel:+393394132022",
  hours: "Ambulatorio il Lunedì, Martedì e Mercoledì dalle 15:00 alle 19:00. In altri giorni o orari è possibile previo accordo.",
  callbackNotice: "In caso di mancata risposta, lasciare un messaggio e verrete richiamate.",
  address: "Via Cristoforo Colombo 4, Mirano (VE)",
  email: "francogarbin@gmail.com"
};
