import { writeFileSync } from 'fs';
import lineByLine from 'n-readlines';

console.log('abc')

function main() {
    const liner = new lineByLine('./src/tracker.txt');
 
    let line;
    let results:string[] = []
 
    while (line = liner.next()) {
        const lineString = line.toString('utf-8');
        if(lineString.length > 0) {
            results.push('&tr=')
            const lineEncoded = encodeURIComponent(lineString)
            results.push(lineEncoded)
        }
    }

    let finalParam = results.join('')

    const outputPath = './outputParam.txt'
    console.log(`merged ${results.length} trackers, save to file: ${outputPath}`)

    writeFileSync(outputPath, finalParam)
}

main()