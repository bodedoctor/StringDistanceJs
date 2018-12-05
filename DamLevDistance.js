function DamerauLevenshteinDistance(valueA, valueB) {
    var prefix = '+';
    valueA = prefix + valueA;
    valueB = prefix + valueB;
    
    var distance = new Array(valueA.length);

    for (var i = 0; i < distance.length; i++) {
        distance[i] = new Array(valueB.length);
    }

    var a;
    for (a = 0; a < distance.length; a++) {
        distance[a][0] = a;
    }

    var b;
    for (b = 0; b < distance[0].length; b++) {
        distance[0][b] = b;
    }

    for (a = 1; a < distance.length; a++) {
        for (b = 1; b < distance[0].length; b++) {
            if (valueA[a] === valueB[b]) {
                distance[a][b] = distance[a - 1][b - 1];
            } else {
                distance[a][b] =
                    min3(
                        distance[a - 1][b] + 1,     // Deletion
                        distance[a][b - 1] + 1,     // Insertion
                        distance[a - 1][b - 1] + 1  // Substitution
                    );
                if (a > 1 && b > 1 && valueA[a] === valueB[b - 1] && valueA[a - 1] === valueB[b]) {
                    distance[a][b] = min2(distance[a][b], distance[a - 2][b - 2] + 1); // Transposition
                }
            }
        }
    }
    return distance[distance.length - 1][distance[0].length - 1];
}

function min2(a, b) {
    if (a < b)
        return a;
    return b;
}

function min3(a, b, c) {
    if (a < b && a < c)
        return a;
    return min2(b, c);
}