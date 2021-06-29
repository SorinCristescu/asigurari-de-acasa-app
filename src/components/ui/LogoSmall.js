import React from 'react';
import { useColorMode, useColorModeValue } from '@chakra-ui/react';

const LogoSmall = () => {
  const bg = useColorModeValue('#0D0D0D', '#FFF9F2');
  const color = useColorModeValue('#FFF9F2', '#0D0D0D');

  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="50" height="50" fill={bg} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.7632 31.432V23.1843L14.9451 23.0148C15.2393 22.7407 15.6599 22.3492 16.1652 21.8798C17.1758 20.9408 18.5249 19.6905 19.8795 18.4444C21.2348 17.1975 22.5928 15.9575 23.6222 15.0379C23.7218 14.9489 23.8181 14.8631 23.9108 14.7808C23.8996 14.9195 23.8873 15.0612 23.8741 15.2042C23.8199 15.7909 23.7523 16.3835 23.6826 16.855C23.6476 17.0917 23.6135 17.2879 23.5824 17.4332C23.5676 17.5025 23.5561 17.5467 23.5493 17.5715C23.532 17.5935 23.5009 17.6322 23.4499 17.6906C23.3534 17.8014 23.2218 17.9427 23.0624 18.1075C22.7446 18.4361 22.3408 18.8327 21.9396 19.2191C21.5396 19.6044 21.1474 19.9745 20.8549 20.2486C20.7486 20.3481 20.6556 20.4349 20.5804 20.5049C20.1809 20.5843 19.8118 20.7663 19.5492 20.9139C19.168 21.1283 18.8358 21.3738 18.6539 21.5164C18.3972 21.7176 18.1326 22.0204 17.9291 22.349C17.7322 22.6671 17.5227 23.1216 17.5227 23.6208V23.624V23.6271V23.6303V23.6335V23.6367V23.64V23.6433V23.6467V23.65V23.6534V23.6568V23.6603V23.6638V23.6673V23.6709V23.6744V23.678V23.6817V23.6854V23.6891V23.6928V23.6965V23.7003V23.7041V23.708V23.7118V23.7157V23.7197V23.7236V23.7276V23.7316V23.7356V23.7397V23.7438V23.7479V23.7521V23.7562V23.7604V23.7646V23.7689V23.7732V23.7775V23.7818V23.7862V23.7905V23.7949V23.7994V23.8038V23.8083V23.8128V23.8173V23.8219V23.8265V23.8311V23.8357V23.8404V23.845V23.8497V23.8545V23.8592V23.864V23.8688V23.8736V23.8784V23.8833V23.8881V23.8931V23.898V23.9029V23.9079V23.9129V23.9179V23.9229V23.928V23.9331V23.9382V23.9433V23.9484V23.9536V23.9588V23.964V23.9692V23.9744V23.9797V23.985V23.9902V23.9956V24.0009V24.0063V24.0116V24.017V24.0224V24.0279V24.0333V24.0388V24.0443V24.0498V24.0553V24.0608V24.0664V24.0719V24.0775V24.0831V24.0888V24.0944V24.1001V24.1057V24.1114V24.1171V24.1228V24.1286V24.1343V24.1401V24.1459V24.1517V24.1575V24.1633V24.1692V24.175V24.1809V24.1868V24.1927V24.1986V24.2045V24.2104V24.2164V24.2224V24.2283V24.2343V24.2403V24.2463V24.2524V24.2584V24.2645V24.2705V24.2766V24.2827V24.2888V24.2949V24.3011V24.3072V24.3133V24.3195V24.3257V24.3319V24.338V24.3442V24.3505V24.3567V24.3629V24.3691V24.3754V24.3817V24.3879V24.3942V24.4005V24.4068V24.4131V24.4194V24.4257V24.4321V24.4384V24.4447V24.4511V24.4575V24.4638V24.4702V24.4766V24.483V24.4894V24.4958V24.5022V24.5086V24.515V24.5215V24.5279V24.5343V24.5408V24.5472V24.5537V24.5602V24.5666V24.5731V24.5796V24.5861V24.5926V24.599V24.6055V24.612V24.6185V24.6251V24.6316V24.6381V24.6446V24.6511V24.6576V24.6642V24.6707V24.6772V24.6838V24.6903V24.6969V24.7034V24.7099V24.7165V24.723V24.7296V24.7361V24.7427V24.7492V24.7558V24.7623V24.7689V24.7754V24.782V24.7886V24.7951V24.8017V24.8082V24.8148V24.8213V24.8279V24.8344V24.841V24.8475V24.8541V24.8606V24.8672V24.8737V24.8802V24.8868V24.8933V24.8998V24.9064V24.9129V24.9194V24.9259V24.9325V24.939V24.9455V24.952V24.9585V24.965V24.9715V24.978V24.9845V24.991V24.9974V25.0039V25.0104V25.0168V25.0233V25.0297V25.0362V25.0426V25.0491V25.0555V25.0619V25.0683V25.0747V25.0811V25.0875V25.0939V25.1003V25.1067V25.113V25.1194V25.1258V25.1321V25.1384V25.1448V25.1511V25.1574V25.1637V25.17V25.1763V25.1826V25.1888V25.1951V25.2013V25.2076V25.2138V25.22V25.2262V25.2324V25.2386V25.2448V25.251V25.2571V25.2633V25.2694V25.2755V25.2816V25.2877V25.2938V25.2999V25.3059V25.312V25.318V25.3241V25.3301V25.3361V25.3421V25.348V25.354V25.36V25.3659V25.3718V25.3777V25.3836V25.3895V25.3954V25.4012V25.4071V25.4129V25.4187V25.4245V25.4303V25.436V25.4418V25.4475V25.4532V25.4589V25.4646V25.4703V25.4759V25.4815V25.4872V25.4928V25.4983V25.5039V25.5095V25.515V25.5205V25.526V25.5315V25.5369V25.5424V25.5478V25.5532V25.5586V25.564V25.5693V25.5747V25.58V25.5853V25.5905V25.5958V25.601V25.6062V25.6114V25.6166V25.6218V25.6269V25.632V25.6371V25.6422V25.6472V25.6522V25.6573V25.6622V25.6672V25.6721V25.6771V25.682V25.6868V25.6917V25.6965V25.7013V25.7061V25.7109V25.7156V25.7203V25.725V25.7297V25.7343V25.739V25.7435V25.7481V25.7527V25.7572V25.7617V25.7662V25.7706V25.775V25.7794V25.7838V25.7882V25.7925V25.7968V25.801V25.8053V25.8095V25.8137V25.8179V25.822V25.8261V25.8302V25.8342V25.8383V25.8423V25.8462V25.8502V25.8541V25.858V25.8619V25.8657V25.8695V25.8733V25.877V25.8807V25.8844V25.8881V25.8917V25.8953V25.8989V25.9024V25.9059V25.9094V25.9129V25.9163V25.9197V25.923V25.9264V25.9297V25.9329V25.9362V25.9394V25.9425V25.9457V25.9488V25.9519V25.9549V25.9579V25.9609V25.9638V25.9667V25.9696V25.9725V25.9753V25.9781V25.9808V25.9835V25.9862V25.9888V25.9914V25.994V25.9966V25.9991V26.0015V26.004V26.0064V26.0087V26.0111V26.0134V26.0156V26.0178V26.02V26.0222V26.0243V26.0264V26.0284V26.0304V26.0324V26.0343V26.0362V26.0381V26.0399V26.0417V26.0434V26.0451V26.0468V26.0484V26.05V26.0516V26.0531V26.0546V26.056V26.0574V26.0587V26.0601V26.0613V26.0626V26.0638V26.0649V26.0661V26.0671V26.0682V26.0692V26.0701V26.071V26.0719V26.0727V26.0735V26.0743V26.075V26.0757V26.0763V26.0769V26.0774V26.0779V26.0784V26.0788V26.0792V26.0795V26.0798V26.08V26.0802V26.0804V26.0805V26.0805L18.4043 26.0806H17.5227C17.5227 26.5675 17.9174 26.9622 18.4043 26.9622C18.8912 26.9622 19.2859 26.5675 19.2859 26.0806H18.4043L19.2859 26.0805V26.0805V26.0804V26.0802V26.08V26.0798V26.0795V26.0792V26.0788V26.0784V26.0779V26.0774V26.0769V26.0763V26.0757V26.075V26.0743V26.0735V26.0727V26.0719V26.071V26.0701V26.0692V26.0682V26.0671V26.0661V26.0649V26.0638V26.0626V26.0613V26.0601V26.0587V26.0574V26.056V26.0546V26.0531V26.0516V26.05V26.0484V26.0468V26.0451V26.0434V26.0417V26.0399V26.0381V26.0362V26.0343V26.0324V26.0304V26.0284V26.0264V26.0243V26.0222V26.02V26.0178V26.0156V26.0134V26.0111V26.0087V26.0064V26.004V26.0015V25.9991V25.9966V25.994V25.9914V25.9888V25.9862V25.9835V25.9808V25.9781V25.9753V25.9725V25.9696V25.9667V25.9638V25.9609V25.9579V25.9549V25.9519V25.9488V25.9457V25.9425V25.9394V25.9362V25.9329V25.9297V25.9264V25.923V25.9197V25.9163V25.9129V25.9094V25.9059V25.9024V25.8989V25.8953V25.8917V25.8881V25.8844V25.8807V25.877V25.8733V25.8695V25.8657V25.8619V25.858V25.8541V25.8502V25.8462V25.8423V25.8383V25.8342V25.8302V25.8261V25.822V25.8179V25.8137V25.8095V25.8053V25.801V25.7968V25.7925V25.7882V25.7838V25.7794V25.775V25.7706V25.7662V25.7617V25.7572V25.7527V25.7481V25.7435V25.739V25.7343V25.7297V25.725V25.7203V25.7156V25.7109V25.7061V25.7013V25.6965V25.6917V25.6868V25.682V25.6771V25.6721V25.6672V25.6622V25.6573V25.6522V25.6472V25.6422V25.6371V25.632V25.6269V25.6218V25.6166V25.6114V25.6062V25.601V25.5958V25.5905V25.5853V25.58V25.5747V25.5693V25.564V25.5586V25.5532V25.5478V25.5424V25.5369V25.5315V25.526V25.5205V25.515V25.5095V25.5039V25.4983V25.4928V25.4872V25.4815V25.4759V25.4703V25.4646V25.4589V25.4532V25.4475V25.4418V25.436V25.4303V25.4245V25.4187V25.4129V25.4071V25.4012V25.3954V25.3895V25.3836V25.3777V25.3718V25.3659V25.36V25.354V25.348V25.3421V25.3361V25.3301V25.3241V25.318V25.312V25.3059V25.2999V25.2938V25.2877V25.2816V25.2755V25.2694V25.2633V25.2571V25.251V25.2448V25.2386V25.2324V25.2262V25.22V25.2138V25.2076V25.2013V25.1951V25.1888V25.1826V25.1763V25.17V25.1637V25.1574V25.1511V25.1448V25.1384V25.1321V25.1258V25.1194V25.113V25.1067V25.1003V25.0939V25.0875V25.0811V25.0747V25.0683V25.0619V25.0555V25.0491V25.0426V25.0362V25.0297V25.0233V25.0168V25.0104V25.0039V24.9974V24.991V24.9845V24.978V24.9715V24.965V24.9585V24.952V24.9455V24.939V24.9325V24.9259V24.9194V24.9129V24.9064V24.8998V24.8933V24.8868V24.8802V24.8737V24.8672V24.8606V24.8541V24.8475V24.841V24.8344V24.8279V24.8213V24.8148V24.8082V24.8017V24.7951V24.7886V24.782V24.7754V24.7689V24.7623V24.7558V24.7492V24.7427V24.7361V24.7296V24.723V24.7165V24.7099V24.7034V24.6969V24.6903V24.6838V24.6772V24.6707V24.6642V24.6576V24.6511V24.6446V24.6381V24.6316V24.6251V24.6185V24.612V24.6055V24.599V24.5926V24.5861V24.5796V24.5731V24.5666V24.5602V24.5537V24.5472V24.5408V24.5343V24.5279V24.5215V24.515V24.5086V24.5022V24.4958V24.4894V24.483V24.4766V24.4702V24.4638V24.4575V24.4511V24.4447V24.4384V24.4321V24.4257V24.4194V24.4131V24.4068V24.4005V24.3942V24.3879V24.3817V24.3754V24.3691V24.3629V24.3567V24.3505V24.3442V24.338V24.3319V24.3257V24.3195V24.3133V24.3072V24.3011V24.2949V24.2888V24.2827V24.2766V24.2705V24.2645V24.2584V24.2524V24.2463V24.2403V24.2343V24.2283V24.2224V24.2164V24.2104V24.2045V24.1986V24.1927V24.1868V24.1809V24.175V24.1692V24.1633V24.1575V24.1517V24.1459V24.1401V24.1343V24.1286V24.1228V24.1171V24.1114V24.1057V24.1001V24.0944V24.0888V24.0831V24.0775V24.0719V24.0664V24.0608V24.0553V24.0498V24.0443V24.0388V24.0333V24.0279V24.0224V24.017V24.0116V24.0063V24.0009V23.9956V23.9902V23.985V23.9797V23.9744V23.9692V23.964V23.9588V23.9536V23.9484V23.9433V23.9382V23.9331V23.928V23.9229V23.9179V23.9129V23.9079V23.9029V23.898V23.8931V23.8881V23.8833V23.8784V23.8736V23.8688V23.864V23.8592V23.8545V23.8497V23.845V23.8404V23.8357V23.8311V23.8265V23.8219V23.8173V23.8128V23.8083V23.8038V23.7994V23.7949V23.7905V23.7862V23.7818V23.7775V23.7732V23.7689V23.7646V23.7604V23.7562V23.7521V23.7479V23.7438V23.7397V23.7356V23.7316V23.7276V23.7236V23.7197V23.7157V23.7118V23.708V23.7041V23.7003V23.6965V23.6928V23.6891V23.6854V23.6817V23.678V23.6744V23.6709V23.6673V23.6638V23.6603V23.6568V23.6534V23.65V23.6467V23.6433V23.64V23.6367V23.6335V23.6303V23.6271V23.624V23.6208C19.2859 23.5911 19.31 23.4682 19.4283 23.2771C19.5401 23.0966 19.6721 22.9586 19.7416 22.9041C19.8859 22.791 20.14 22.6046 20.4134 22.4508C20.7216 22.2776 20.9126 22.2279 20.9698 22.2279C21.1123 22.2279 21.2554 22.2184 21.393 22.2032V27.6884L17.75 31.432H14.7632ZM23.1562 21.117V20.4955L23.1628 20.4891C23.5694 20.0975 23.9905 19.6841 24.3298 19.3333C24.4989 19.1585 24.654 18.9927 24.7789 18.8494C24.8844 18.7284 25.0274 18.5582 25.1151 18.3941C25.2161 18.2052 25.2725 17.9614 25.3066 17.8023C25.3488 17.6054 25.3891 17.3681 25.4268 17.1128C25.5026 16.6002 25.5738 15.974 25.6299 15.3661C25.6859 14.7589 25.7281 14.1558 25.7444 13.6898C25.7524 13.4598 25.7547 13.2454 25.7467 13.0748C25.7428 12.9932 25.7355 12.8934 25.718 12.7969C25.7095 12.7507 25.6934 12.674 25.6604 12.5887L25.66 12.5877C25.64 12.5358 25.5526 12.3099 25.3115 12.1492C25.0663 11.9857 24.8237 11.9951 24.7303 12.0043C24.6222 12.0149 24.5394 12.0429 24.4995 12.0577C24.4165 12.0886 24.3521 12.126 24.3231 12.1432C24.2564 12.183 24.1911 12.2302 24.1399 12.2687C24.0305 12.3508 23.8901 12.4653 23.7311 12.5993C23.4092 12.8706 22.9662 13.2596 22.4475 13.7229C21.4082 14.6514 20.0425 15.8986 18.6857 17.1467C17.3283 18.3955 15.9769 19.6479 14.965 20.588C14.4591 21.058 14.0379 21.4501 13.7432 21.7246L13.4011 22.0435L13.311 22.1276L13.2879 22.1492L13.282 22.1547L13.2805 22.156L13.2801 22.1564C13.28 22.1565 13.28 22.1565 13.8816 22.8009L13.28 22.1565L13 22.4179V22.8009V32.3136V32.6663V33.1952V37.0832C13 37.5895 13.4105 38 13.9169 38H20.4761C20.9825 38 21.393 37.5895 21.393 37.0832V32.6663C21.393 32.1599 20.9825 31.7494 20.4761 31.7494H19.9014L22.9064 28.6614L23.1562 28.4047V28.0466V21.117ZM14.7632 36.2368V33.5126H19.6298V36.2368H14.7632Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.9028 31.4319V23.1842L34.7209 23.0147C34.4267 22.7406 34.0061 22.3491 33.5009 21.8797C32.4902 20.9408 31.1411 19.6905 29.7865 18.4443C28.4312 17.1975 27.0732 15.9574 26.0438 15.0378C25.9442 14.9489 25.8479 14.8631 25.7552 14.7808C25.7665 14.9195 25.7788 15.0612 25.7919 15.2041C25.8461 15.7909 25.9138 16.3835 25.9835 16.855C26.0184 17.0917 26.0525 17.2879 26.0836 17.4332C26.0984 17.5025 26.1099 17.5466 26.1167 17.5715C26.134 17.5935 26.1652 17.6322 26.2161 17.6906C26.3127 17.8013 26.4442 17.9427 26.6036 18.1075C26.9214 18.4361 27.3252 18.8327 27.7264 19.2191C28.1264 19.6044 28.5186 19.9744 28.8112 20.2485C28.9174 20.3481 29.0104 20.4348 29.0856 20.5049C29.4851 20.5843 29.8542 20.7663 30.1168 20.9139C30.498 21.1282 30.8302 21.3738 31.0121 21.5163C31.2688 21.7175 31.5335 22.0203 31.7369 22.349C31.9338 22.667 32.1433 23.1216 32.1433 23.6208V23.6239V23.6271V23.6303V23.6335V23.6367V23.64V23.6433V23.6466V23.65V23.6534V23.6568V23.6603V23.6638V23.6673V23.6708V23.6744V23.678V23.6817V23.6853V23.689V23.6927V23.6965V23.7003V23.7041V23.7079V23.7118V23.7157V23.7196V23.7236V23.7276V23.7316V23.7356V23.7397V23.7438V23.7479V23.752V23.7562V23.7604V23.7646V23.7689V23.7731V23.7774V23.7818V23.7861V23.7905V23.7949V23.7993V23.8038V23.8083V23.8128V23.8173V23.8219V23.8264V23.8311V23.8357V23.8403V23.845V23.8497V23.8544V23.8592V23.8639V23.8687V23.8735V23.8784V23.8832V23.8881V23.893V23.8979V23.9029V23.9079V23.9129V23.9179V23.9229V23.928V23.933V23.9381V23.9432V23.9484V23.9535V23.9587V23.9639V23.9691V23.9744V23.9796V23.9849V23.9902V23.9955V24.0009V24.0062V24.0116V24.017V24.0224V24.0278V24.0333V24.0388V24.0442V24.0497V24.0553V24.0608V24.0663V24.0719V24.0775V24.0831V24.0887V24.0944V24.1V24.1057V24.1114V24.1171V24.1228V24.1285V24.1343V24.1401V24.1458V24.1516V24.1575V24.1633V24.1691V24.175V24.1808V24.1867V24.1926V24.1985V24.2045V24.2104V24.2164V24.2223V24.2283V24.2343V24.2403V24.2463V24.2523V24.2584V24.2644V24.2705V24.2766V24.2827V24.2888V24.2949V24.301V24.3072V24.3133V24.3195V24.3256V24.3318V24.338V24.3442V24.3504V24.3566V24.3629V24.3691V24.3754V24.3816V24.3879V24.3942V24.4005V24.4068V24.4131V24.4194V24.4257V24.432V24.4384V24.4447V24.4511V24.4574V24.4638V24.4702V24.4766V24.4829V24.4893V24.4957V24.5022V24.5086V24.515V24.5214V24.5279V24.5343V24.5408V24.5472V24.5537V24.5601V24.5666V24.5731V24.5796V24.586V24.5925V24.599V24.6055V24.612V24.6185V24.625V24.6315V24.6381V24.6446V24.6511V24.6576V24.6641V24.6707V24.6772V24.6837V24.6903V24.6968V24.7034V24.7099V24.7165V24.723V24.7296V24.7361V24.7427V24.7492V24.7558V24.7623V24.7689V24.7754V24.782V24.7885V24.7951V24.8016V24.8082V24.8147V24.8213V24.8278V24.8344V24.8409V24.8475V24.854V24.8606V24.8671V24.8737V24.8802V24.8867V24.8933V24.8998V24.9063V24.9129V24.9194V24.9259V24.9324V24.9389V24.9455V24.952V24.9585V24.965V24.9715V24.978V24.9844V24.9909V24.9974V25.0039V25.0103V25.0168V25.0233V25.0297V25.0362V25.0426V25.049V25.0555V25.0619V25.0683V25.0747V25.0811V25.0875V25.0939V25.1003V25.1067V25.113V25.1194V25.1257V25.1321V25.1384V25.1447V25.1511V25.1574V25.1637V25.17V25.1762V25.1825V25.1888V25.1951V25.2013V25.2075V25.2138V25.22V25.2262V25.2324V25.2386V25.2448V25.2509V25.2571V25.2632V25.2694V25.2755V25.2816V25.2877V25.2938V25.2999V25.3059V25.312V25.318V25.324V25.3301V25.3361V25.342V25.348V25.354V25.3599V25.3659V25.3718V25.3777V25.3836V25.3895V25.3953V25.4012V25.407V25.4128V25.4187V25.4244V25.4302V25.436V25.4417V25.4475V25.4532V25.4589V25.4646V25.4702V25.4759V25.4815V25.4871V25.4927V25.4983V25.5039V25.5094V25.515V25.5205V25.526V25.5315V25.5369V25.5424V25.5478V25.5532V25.5586V25.5639V25.5693V25.5746V25.5799V25.5852V25.5905V25.5958V25.601V25.6062V25.6114V25.6166V25.6217V25.6269V25.632V25.6371V25.6421V25.6472V25.6522V25.6572V25.6622V25.6672V25.6721V25.677V25.6819V25.6868V25.6917V25.6965V25.7013V25.7061V25.7108V25.7156V25.7203V25.725V25.7297V25.7343V25.7389V25.7435V25.7481V25.7526V25.7572V25.7617V25.7661V25.7706V25.775V25.7794V25.7838V25.7881V25.7924V25.7967V25.801V25.8053V25.8095V25.8137V25.8178V25.822V25.8261V25.8302V25.8342V25.8382V25.8422V25.8462V25.8502V25.8541V25.858V25.8618V25.8657V25.8695V25.8732V25.877V25.8807V25.8844V25.8881V25.8917V25.8953V25.8989V25.9024V25.9059V25.9094V25.9128V25.9163V25.9197V25.923V25.9263V25.9296V25.9329V25.9361V25.9393V25.9425V25.9456V25.9488V25.9518V25.9549V25.9579V25.9609V25.9638V25.9667V25.9696V25.9724V25.9752V25.978V25.9808V25.9835V25.9862V25.9888V25.9914V25.994V25.9965V25.999V26.0015V26.0039V26.0063V26.0087V26.011V26.0133V26.0156V26.0178V26.02V26.0222V26.0243V26.0263V26.0284V26.0304V26.0324V26.0343V26.0362V26.038V26.0399V26.0416V26.0434V26.0451V26.0468V26.0484V26.05V26.0515V26.053V26.0545V26.056V26.0574V26.0587V26.06V26.0613V26.0625V26.0637V26.0649V26.066V26.0671V26.0681V26.0691V26.0701V26.071V26.0719V26.0727V26.0735V26.0743V26.075V26.0756V26.0763V26.0768V26.0774V26.0779V26.0783V26.0788V26.0791V26.0794V26.0797V26.08V26.0802V26.0803V26.0804V26.0805L31.2617 26.0805H32.1433C32.1433 26.5674 31.7486 26.9621 31.2617 26.9621C30.7748 26.9621 30.3801 26.5674 30.3801 26.0805H31.2617L30.3801 26.0805V26.0804V26.0803V26.0802V26.08V26.0797V26.0794V26.0791V26.0788V26.0783V26.0779V26.0774V26.0768V26.0763V26.0756V26.075V26.0743V26.0735V26.0727V26.0719V26.071V26.0701V26.0691V26.0681V26.0671V26.066V26.0649V26.0637V26.0625V26.0613V26.06V26.0587V26.0574V26.056V26.0545V26.053V26.0515V26.05V26.0484V26.0468V26.0451V26.0434V26.0416V26.0399V26.038V26.0362V26.0343V26.0324V26.0304V26.0284V26.0263V26.0243V26.0222V26.02V26.0178V26.0156V26.0133V26.011V26.0087V26.0063V26.0039V26.0015V25.999V25.9965V25.994V25.9914V25.9888V25.9862V25.9835V25.9808V25.978V25.9752V25.9724V25.9696V25.9667V25.9638V25.9609V25.9579V25.9549V25.9518V25.9488V25.9456V25.9425V25.9393V25.9361V25.9329V25.9296V25.9263V25.923V25.9197V25.9163V25.9128V25.9094V25.9059V25.9024V25.8989V25.8953V25.8917V25.8881V25.8844V25.8807V25.877V25.8732V25.8695V25.8657V25.8618V25.858V25.8541V25.8502V25.8462V25.8422V25.8382V25.8342V25.8302V25.8261V25.822V25.8178V25.8137V25.8095V25.8053V25.801V25.7967V25.7924V25.7881V25.7838V25.7794V25.775V25.7706V25.7661V25.7617V25.7572V25.7526V25.7481V25.7435V25.7389V25.7343V25.7297V25.725V25.7203V25.7156V25.7108V25.7061V25.7013V25.6965V25.6917V25.6868V25.6819V25.677V25.6721V25.6672V25.6622V25.6572V25.6522V25.6472V25.6421V25.6371V25.632V25.6269V25.6217V25.6166V25.6114V25.6062V25.601V25.5958V25.5905V25.5852V25.5799V25.5746V25.5693V25.5639V25.5586V25.5532V25.5478V25.5424V25.5369V25.5315V25.526V25.5205V25.515V25.5094V25.5039V25.4983V25.4927V25.4871V25.4815V25.4759V25.4702V25.4646V25.4589V25.4532V25.4475V25.4417V25.436V25.4302V25.4244V25.4187V25.4128V25.407V25.4012V25.3953V25.3895V25.3836V25.3777V25.3718V25.3659V25.3599V25.354V25.348V25.342V25.3361V25.3301V25.324V25.318V25.312V25.3059V25.2999V25.2938V25.2877V25.2816V25.2755V25.2694V25.2632V25.2571V25.2509V25.2448V25.2386V25.2324V25.2262V25.22V25.2138V25.2075V25.2013V25.1951V25.1888V25.1825V25.1762V25.17V25.1637V25.1574V25.1511V25.1447V25.1384V25.1321V25.1257V25.1194V25.113V25.1067V25.1003V25.0939V25.0875V25.0811V25.0747V25.0683V25.0619V25.0555V25.049V25.0426V25.0362V25.0297V25.0233V25.0168V25.0103V25.0039V24.9974V24.9909V24.9844V24.978V24.9715V24.965V24.9585V24.952V24.9455V24.9389V24.9324V24.9259V24.9194V24.9129V24.9063V24.8998V24.8933V24.8867V24.8802V24.8737V24.8671V24.8606V24.854V24.8475V24.8409V24.8344V24.8278V24.8213V24.8147V24.8082V24.8016V24.7951V24.7885V24.782V24.7754V24.7689V24.7623V24.7558V24.7492V24.7427V24.7361V24.7296V24.723V24.7165V24.7099V24.7034V24.6968V24.6903V24.6837V24.6772V24.6707V24.6641V24.6576V24.6511V24.6446V24.6381V24.6315V24.625V24.6185V24.612V24.6055V24.599V24.5925V24.586V24.5796V24.5731V24.5666V24.5601V24.5537V24.5472V24.5408V24.5343V24.5279V24.5214V24.515V24.5086V24.5022V24.4957V24.4893V24.4829V24.4766V24.4702V24.4638V24.4574V24.4511V24.4447V24.4384V24.432V24.4257V24.4194V24.4131V24.4068V24.4005V24.3942V24.3879V24.3816V24.3754V24.3691V24.3629V24.3566V24.3504V24.3442V24.338V24.3318V24.3256V24.3195V24.3133V24.3072V24.301V24.2949V24.2888V24.2827V24.2766V24.2705V24.2644V24.2584V24.2523V24.2463V24.2403V24.2343V24.2283V24.2223V24.2164V24.2104V24.2045V24.1985V24.1926V24.1867V24.1808V24.175V24.1691V24.1633V24.1575V24.1516V24.1458V24.1401V24.1343V24.1285V24.1228V24.1171V24.1114V24.1057V24.1V24.0944V24.0887V24.0831V24.0775V24.0719V24.0663V24.0608V24.0553V24.0497V24.0442V24.0388V24.0333V24.0278V24.0224V24.017V24.0116V24.0062V24.0009V23.9955V23.9902V23.9849V23.9796V23.9744V23.9691V23.9639V23.9587V23.9535V23.9484V23.9432V23.9381V23.933V23.928V23.9229V23.9179V23.9129V23.9079V23.9029V23.8979V23.893V23.8881V23.8832V23.8784V23.8735V23.8687V23.8639V23.8592V23.8544V23.8497V23.845V23.8403V23.8357V23.8311V23.8264V23.8219V23.8173V23.8128V23.8083V23.8038V23.7993V23.7949V23.7905V23.7861V23.7818V23.7774V23.7731V23.7689V23.7646V23.7604V23.7562V23.752V23.7479V23.7438V23.7397V23.7356V23.7316V23.7276V23.7236V23.7196V23.7157V23.7118V23.7079V23.7041V23.7003V23.6965V23.6927V23.689V23.6853V23.6817V23.678V23.6744V23.6708V23.6673V23.6638V23.6603V23.6568V23.6534V23.65V23.6466V23.6433V23.64V23.6367V23.6335V23.6303V23.6271V23.6239V23.6208C30.3801 23.5911 30.356 23.4682 30.2377 23.2771C30.126 23.0966 29.9939 22.9586 29.9244 22.9041C29.7801 22.791 29.526 22.6046 29.2526 22.4508C28.9444 22.2775 28.7534 22.2279 28.6962 22.2279C28.5537 22.2279 28.4106 22.2183 28.273 22.2032V27.6884L31.916 31.4319H34.9028ZM26.5098 21.117V20.4954L26.5032 20.4891C26.0966 20.0975 25.6755 19.6841 25.3362 19.3333C25.1671 19.1584 25.0121 18.9927 24.8871 18.8494C24.7816 18.7284 24.6386 18.5581 24.5509 18.394C24.4499 18.2052 24.3935 17.9614 24.3594 17.8023C24.3173 17.6053 24.2769 17.3681 24.2392 17.1128C24.1634 16.6002 24.0922 15.9739 24.0362 15.3661C23.9801 14.7588 23.9379 14.1557 23.9217 13.6897C23.9137 13.4598 23.9113 13.2454 23.9193 13.0747C23.9232 12.9931 23.9305 12.8934 23.9481 12.7969C23.9565 12.7507 23.9726 12.6739 24.0056 12.5887L24.006 12.5877C24.0261 12.5358 24.1134 12.3099 24.3545 12.1492C24.5997 11.9857 24.8423 11.9951 24.9357 12.0042C25.0438 12.0148 25.1266 12.0429 25.1665 12.0577C25.2495 12.0885 25.314 12.1259 25.3429 12.1432C25.4096 12.183 25.4749 12.2302 25.5262 12.2687C25.6356 12.3508 25.7759 12.4653 25.9349 12.5993C26.2568 12.8705 26.6998 13.2595 27.2185 13.7229C28.2578 14.6514 29.6235 15.8985 30.9803 17.1467C32.3378 18.3955 33.6891 19.6479 34.701 20.5879C35.2069 21.058 35.6281 21.45 35.9228 21.7246L36.2649 22.0434L36.355 22.1275L36.3782 22.1491L36.384 22.1546L36.3855 22.156L36.3859 22.1564C36.386 22.1564 36.386 22.1565 35.7844 22.8009L36.386 22.1565L36.666 22.4179V22.8009V32.3136V32.6662V33.1952V37.0831C36.666 37.5895 36.2555 38 35.7491 38H29.1899C28.6835 38 28.273 37.5895 28.273 37.0831V32.6662C28.273 32.1598 28.6835 31.7493 29.1899 31.7493H29.7646L26.7596 28.6614L26.5098 28.4047V28.0465V21.117ZM34.9028 36.2368V33.5126H30.0363V36.2368H34.9028Z"
        fill={color}
      />
    </svg>
  );
};

export default LogoSmall;