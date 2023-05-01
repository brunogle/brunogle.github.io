function clearFields() {
    Ex.delete();
    Ey.delete();
    Hz.delete();
    ICHx.delete();
    ICHy.delete();
    IHz.delete();
    divEminusQ.delete();
    q.delete();
    Jx.delete();
    Jy.delete();

    Ex = createExSizeEmptyTextureKernel();
    Ey = createEySizeEmptyTextureKernel();
    Hz = createHzSizeEmptyTextureKernel();
    ICHx = createExSizeEmptyTextureKernel();
    ICHy = createEySizeEmptyTextureKernel();
    IHz = createHzSizeEmptyTextureKernel();
    divEminusQ = createQSizeEmptyTextureKernel();
    q = createQSizeEmptyTextureKernel();
    Jx = createEySizeEmptyTextureKernel();
    Jy = createEySizeEmptyTextureKernel();
}



function setEnvVacuum() {
    newEnvironmentFunction = () => {
        for (let i = 0; i < gridSizeX; i++) {
            for (let j = 0; j < gridSizeY; j++) {
                eps[j][i] = 1.0;
            }
        }

        setupUpdateParameters();
    };
}

function setEnvHalfDielectric() {
    newEnvironmentFunction = () => {
        for (let i = 0; i < gridSizeX; i++) {
            for (let j = 0; j < gridSizeY; j++) {
                eps[j][i] = (j < gridSizeY / 2) ? 3 : 1.0;
            }
        }

        setupUpdateParameters();
    };
}

function setEnvCircle() {
    newEnvironmentFunction = () => {
        for (let i = 0; i < gridSizeX; i++) {
            for (let j = 0; j < gridSizeY; j++) {
                eps[j][i] = (i - gridSizeX / 2) * (i - gridSizeX / 2) + (j - gridSizeY / 2) * (j - gridSizeY / 2) < gridSizeX / 5 * gridSizeX / 5 ? 3 : 1.0;
            }
        }

        setupUpdateParameters();
    };
}


function setEnvParabolicMirror() {
    newEnvironmentFunction = () => {
        for (let i = 0; i < gridSizeX; i++) {
            for (let j = 0; j < gridSizeY; j++) {
                eps[j][i] = j < 4 * ((i - gridSizeX / 2) ** 2) / gridSizeX ** 2 * (gridSizeY / 2 - gridSizeY / 20) + gridSizeY / 20 ? 1100 : 1.0;
            }
        }

        setupUpdateParameters();

    };
}

function setEnvDoubleSlit() {
    newEnvironmentFunction = () => {

        var slitWidth = 10;
        var slitDistance = 40;

        var slitWidthDiv2 = Math.floor(slitWidth/2);
        var slitDistanceDiv2 = Math.floor(slitDistance/2);
        var gridSizeXDiv2 = Math.floor(gridSizeX/2);
        var gridSizeYDiv2 = Math.floor(gridSizeY/2);

        for (let i = 0; i < gridSizeX; i++) {
            for (let j = 0; j < gridSizeY; j++) {
                eps[j][i] = 1.0;
            }
        }

        for (let i = gridSizeXDiv2 - 2; i < gridSizeXDiv2 + 2; i++) {
            for (let j = 0; j < gridSizeYDiv2 - slitDistanceDiv2 - slitWidthDiv2; j++) {
                eps[j][i] = 1100.0;
            }
            for (let j = gridSizeYDiv2 - slitDistanceDiv2 + slitWidthDiv2; j < gridSizeYDiv2 + slitDistanceDiv2 - slitWidthDiv2; j++) {
                eps[j][i] = 1100.0;
            }
            for (let j = gridSizeYDiv2 + slitDistanceDiv2 + slitWidthDiv2; j < gridSizeY; j++) {
                eps[j][i] = 1100.0;
            }

        }

        setupUpdateParameters();

    };
}
