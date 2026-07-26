import chalk from "chalk"; // more modern import syntax

console.log(chalk.red("helllo world"));

// --experimental-modules is being used back when the es modules were not stable now  so we dont need them now in the modern nodejs environment
// internal package are those package that nodejs provide out of the box we dont have to install it

// when i installed express it also downloads some other packages as well . which express was dependent upon

//x.y.z major.minor.patch this is for version

//"chalk": "^5.6.2", // here ^(caret) this means install any version less than 6.0.0 which is compatible here u feel me (beacuse agar new version latest h toh humein vo chahiye taaki jab koi install kare ya jab kisi ne node modules delete kardia toh new version download hoga )

// to make sure everyone gets the same version the package.lock.json has been added so we can lock the version we once install (coz if we dont it will install any comoptatible version which might break compatibilty with other thing as u see if someone else dowloads your proect or some other developer also code with you)
