interface MajorCredits {
  credits: number;
  brand: 'Major';
}

interface MinorCredits {
  credits: number;
  brand: 'Minor';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, brand: 'Major' };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, brand: 'Minor' };
}


// Examples
const mathSubject: MajorCredits = { credits: 4, brand: 'Major' };
const physicsSubject: MajorCredits = { credits: 3, brand: 'Major' };

const musicSubject: MinorCredits = { credits: 2, brand: 'Minor' };
const artSubject: MinorCredits = { credits: 1, brand: 'Minor' };

const totalMajorCredits = sumMajorCredits(mathSubject, physicsSubject);
const totalMinorCredits = sumMinorCredits(musicSubject, artSubject);

console.log('Total Major Credits:', totalMajorCredits);
console.log('Total Minor Credits:', totalMinorCredits);

