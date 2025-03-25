package com.personalproject.schooADM.entities.enums;

public enum LanguageEnum {
    ENGLISH,
    SPANISH,
    GERMAN,
    FRENCH,
    ITALIAN
}

/*
    select * from languages;

INSERT INTO languages (id, active_status, flag_icon, round_flag_icon, language)
VALUES (
    'f384cbd7-7e5b-4ba2-afb3-94299ca1e3b1',
    TRUE,
    '/assets/images/deutschland_flagge.png',
    '/assets/images/deutschland_rund.png',
    'GERMAN'  -- O ENUM já está correto
);

-- e6342422-ef1c-480b-b453-9807babddfc4
-- 1d2a3a49-4b92-4cd0-9888-4d6d67e4fb0f
-- 6021cd79-32bf-461c-bf14-d4d738b94204
-- 2bac16be-ee6a-4994-ac18-46fee4f3e1ef

*/